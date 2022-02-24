import './index.less';

import {
  DATE_FORMAT,
  ORDER_STATUSES_OPTIONS,
  PET_REPRODUCTION_TYPES_OPTIONS,
  PET_TYPES_OPTIONS,
} from 'constants/index';

import {
  AutoComplete,
  Button,
  Card,
  Col,
  Collapse,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Tag,
  Typography,
} from 'antd';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import dayjs, { Dayjs } from 'dayjs';
import { Client, SelectOption } from 'interfaces';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { formatPrice, getCountDays, getLocaleOrderStatus, getPrePrice, mapStatusToColor } from 'utils/index';

import { REQUIRED_RULE } from './constants';
import { useSearchClient } from './hooks';
import { OrderDrawerProps } from './interfaces';
import { getIsDisabledFields } from './utils';

export const OrderDrawer: React.FC<OrderDrawerProps> = ({ isOpen, onClose, clients, rooms, editableOrder }) => {
  const [isNewClient, setIsNewClient] = useState<boolean>(false);
  const { options, search } = useSearchClient(clients);

  const title = editableOrder ? `Редактирование заказа № ${editableOrder.id}` : 'Новый заказ';

  const roomOptions: SelectOption[] = useMemo(
    () =>
      rooms.map((room) => ({
        label: room.name,
        value: String(room.id),
      })),
    [rooms]
  );

  const [form] = Form.useForm();

  const onSelect = (value: string) => {
    const client = clients.find((item: Client) => item.login === value);

    if (client) {
      form.setFieldsValue({
        firstName: client.firstName,
        lastName: client.lastName,
        phone: client.phone,
        email: client.email,
      });
      setIsNewClient(true);
    }
  };

  const onCreateClient = () => {
    setIsNewClient(true);
  };

  // @ts-ignore
  const onFinish = (p) => {
    console.log(p);
  };

  useEffect(() => {
    if (editableOrder) {
      form.setFieldsValue({
        firstName: editableOrder.client.firstName,
        lastName: editableOrder.client.lastName,
        phone: editableOrder.client.phone,
        email: editableOrder.client.email,
        room: String(editableOrder.room.id),
        status: editableOrder.status,
        comment: editableOrder.comment,
        dates: [dayjs(editableOrder.startDate), dayjs(editableOrder.endDate)],
        pets: [...editableOrder.pets],
        count: editableOrder.countDays,
      });
    } else {
      form.setFieldsValue({
        room: roomOptions[0],
        status: ORDER_STATUSES_OPTIONS[0],
        pets: [
          {
            type: PET_TYPES_OPTIONS[0],
            reproduction: PET_REPRODUCTION_TYPES_OPTIONS[0],
          },
        ],
      });
    }
  }, [form, editableOrder, roomOptions]);

  const getCountSelectedDays = useCallback((days: [Dayjs, Dayjs]) => {
    return days?.length > 1 ? getCountDays(days[0], days[1]) : 0;
  }, []);

  const getTotalPrice = useCallback(
    (days, roomId) => {
      return days?.length > 1 ? getPrePrice(days[0], days[1], roomId, rooms) : null;
    },
    [rooms]
  );

  return (
    <Drawer
      title={title}
      placement="right"
      visible={isOpen}
      width={720}
      onClose={onClose}
      destroyOnClose
      className="orders-drawer"
      extra={
        editableOrder && (
          <Tag color={mapStatusToColor(editableOrder.status)}>{getLocaleOrderStatus(editableOrder.status)}</Tag>
        )
      }>
      <Form layout="vertical" name="order" onFinish={onFinish} form={form} preserve={false}>
        <Collapse defaultActiveKey={editableOrder ? ['client', 'order', 'pets'] : 'client'}>
          <Collapse.Panel key="client" header="Клиент">
            <Row gutter={16}>
              {!editableOrder && (
                <>
                  <Col span={12}>
                    <Form.Item>
                      <AutoComplete options={options} onSelect={onSelect} onSearch={search}>
                        <Input.Search placeholder="Найти клиента" enterButton />
                      </AutoComplete>
                    </Form.Item>
                  </Col>

                  <Col span={12} className="orders-drawer__form-button">
                    <Button onClick={onCreateClient}>Создать клиента</Button>
                  </Col>
                </>
              )}
              {(isNewClient || editableOrder) && (
                <>
                  <Col span={12}>
                    <Form.Item label="Имя" required name="firstName" rules={[REQUIRED_RULE]}>
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="Фамилия" required name="lastName" rules={[REQUIRED_RULE]}>
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="Телефон" required name="phone" rules={[REQUIRED_RULE]}>
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="E-mail" required name="email" rules={[REQUIRED_RULE]}>
                      <Input />
                    </Form.Item>
                  </Col>
                </>
              )}
            </Row>
          </Collapse.Panel>

          <Collapse.Panel key="order" header="Заказ">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Тип номера" required name="room">
                  <Select>
                    {roomOptions.map((item) => (
                      <Select.Option key={item.value}>{item.label}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Дата заезда и отъезда" required name="dates" rules={[REQUIRED_RULE]}>
                  <DatePicker.RangePicker locale={locale} format={DATE_FORMAT} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Статус" required name="status">
                  <Select>
                    {ORDER_STATUSES_OPTIONS.map((item) => (
                      <Select.Option key={item.value} value={item.value}>
                        {item.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12} className="orders-drawer__days-count">
                <Form.Item dependencies={['dates']}>
                  {({ getFieldValue }) => {
                    // если это редактирование, то берем из initial
                    const editableCountDays = editableOrder?.countDays;
                    const calcDays = getCountSelectedDays(getFieldValue('dates'));
                    const days = editableCountDays !== calcDays ? calcDays : editableCountDays;

                    return days ? (
                      <Typography.Text>
                        Количество суток:
                        <Typography.Title level={4}>{days}</Typography.Title>
                      </Typography.Text>
                    ) : null;
                  }}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Комментарий" name="comment">
                  <Input.TextArea />
                </Form.Item>
              </Col>
            </Row>
          </Collapse.Panel>

          <Collapse.Panel key="pets" header="Питомцы">
            <Form.List name="pets">
              {(fields, { add }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Card key={key} className="orders-drawer__pet-item">
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item label="Вид" required name={[name, 'type']} {...restField}>
                            <Select>
                              {PET_TYPES_OPTIONS.map((item) => (
                                <Select.Option key={item.value} value={item.value}>
                                  {item.label}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item
                            label="Кличка"
                            required
                            name={[name, 'name']}
                            {...restField}
                            rules={[REQUIRED_RULE]}>
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item
                            label="Возраст"
                            required
                            name={[name, 'age']}
                            {...restField}
                            rules={[REQUIRED_RULE]}>
                            <InputNumber />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Кастр./Стер." required name={[name, 'reproduction']} {...restField}>
                            <Select>
                              {PET_REPRODUCTION_TYPES_OPTIONS.map((item) => (
                                <Select.Option key={item.value} value={item.value}>
                                  {item.label}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Особые отметки" name={[name, 'special']} {...restField}>
                            <Input.TextArea />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Комментарии" name={[name, 'comments']} {...restField}>
                            <Input.TextArea />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Card>
                  ))}

                  <Button onClick={() => add()}>Добавить питомца</Button>
                </>
              )}
            </Form.List>
          </Collapse.Panel>
        </Collapse>

        <Form.Item dependencies={['dates', 'room']} className="orders-drawer__total-price">
          {({ getFieldValue }) => {
            const days = getFieldValue('dates');
            const roomId = getFieldValue('room');
            const calcPrice = getTotalPrice(days, roomId);
            const editablePrice = editableOrder?.price;
            const price = calcPrice !== editablePrice ? calcPrice : editablePrice;

            return price ? <Typography.Title level={5}>Общая стоимость: {formatPrice(price)}</Typography.Title> : null;
          }}
        </Form.Item>

        <Form.Item shouldUpdate>
          {({ getFieldsError, getFieldsValue }) => {
            const isDisabled = getIsDisabledFields(getFieldsError(), getFieldsValue());
            return (
              <Button type="primary" htmlType="submit" disabled={isDisabled}>
                Сохранить
              </Button>
            );
          }}
        </Form.Item>
      </Form>
    </Drawer>
  );
};
