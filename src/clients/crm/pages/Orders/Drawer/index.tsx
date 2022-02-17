//@ts-nocheck
import './index.less';

import { ORDER_STATUSES_OPTIONS } from 'constants';
import { DATE_FORMAT, PET_REPRODUCTION_TYPES_OPTIONS, PET_TYPES_OPTIONS } from 'constants/index';

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
  Statistic,
  Typography,
} from 'antd';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import dayjs from 'dayjs';
import { Client, SelectOption } from 'interfaces';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { formatPrice, getCountDays, getPrePrice } from 'utils';

export interface OrderDrawer {
  isOpen: boolean;
  onClose(): void;
  clients: Client[];
  rooms: Room[];
}

interface UseSearchClientResult {
  options: SelectOption[];
  search(value: string): void;
}

const useSearchClient = (clients: Client[]): UseSearchClientResult => {
  const [initialOptions, setInitialOptions] = useState<SelectOption[]>([]);
  const [options, setOptions] = useState<SelectOption[]>([]);

  const search = useCallback(
    (value: string) => {
      const filtered = value
        ? initialOptions.filter(
            (item) =>
              item.label.toUpperCase().includes(value.toUpperCase()) ||
              item.value.toUpperCase().includes(value.toUpperCase())
          )
        : initialOptions;

      setOptions(filtered);
    },
    [initialOptions]
  );

  useEffect(() => {
    const options = clients.map((item) => {
      return { label: `${item.firstName} ${item.lastName}`, value: item.login };
    });

    setInitialOptions(options);
    setOptions(options);
  }, [clients]);

  return {
    options,
    search,
  };
};

export const OrderDrawer: React.FC<OrderDrawer> = ({ isOpen, onClose, clients, rooms }) => {
  const [client, setClient] = useState<Client | null>(null);
  const { options, search } = useSearchClient(clients);

  const roomOptions: SelectOption[] = useMemo(
    () =>
      rooms.map((room) => ({
        label: room.name,
        value: room.id,
      })),
    [rooms]
  );

  const [form] = Form.useForm();

  const onSelect = (value: string) => {
    const client = clients.find((item: Client) => item.login === value);

    if (client) {
      setClient(client);
    }
  };

  const onCreateClient = () => {
    setClient({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    });
  };

  const onFinish = (p) => {
    console.log(p);
  };

  useEffect(() => {
    // defaultValue={roomOptions.length > 0 ? roomOptions[0].value : null}
    // console.log(ORDER_STATUSES_OPTIONS[0].value);
    //

    form.setFieldsValue({
      // firstName: client.firstName,
      // lastName: client.lastName,
      // phone: client.phone,
      // email: client.email,
      room: roomOptions[0].value,
      status: ORDER_STATUSES_OPTIONS[0].value,
    });
    // if (client) {
    //   console.log('set');
    //
    //
    // }
  }, [roomOptions, ORDER_STATUSES_OPTIONS]);

  const getCountSelectedDays = useCallback((days: [Moment, Moment]) => {
    return days?.length > 1 ? getCountDays(days[0], days[1]) : 0;
  }, []);

  const getTotalPrice = useCallback(
    (days, roomId) => {
      const price = days?.length > 1 ? getPrePrice(days[0], days[1], roomId, rooms) : null;

      return formatPrice(price);
    },
    [rooms]
  );

  // const initialV = {
  //   // firstName: client.firstName,
  //   // lastName: client.lastName,
  //   // phone: client.phone,
  //   // email: client.email,
  //   // room: roomOptions[0].label,
  //   status: ORDER_STATUSES_OPTIONS[0].value,
  // };

  // console.log(client);

  // initialValues={initialV}

  return (
    <Drawer
      title="Создание заказа"
      placement="right"
      visible={isOpen}
      width={720}
      onClose={onClose}
      className="orders-drawer">
      <Form layout="vertical" name="order" onFinish={onFinish} form={form}>
        {/*<Typography.Title level={5}>Клиент</Typography.Title>*/}

        <Collapse defaultActiveKey="client">
          <Collapse.Panel key="client" header="Клиент">
            <Row gutter={16}>
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

              {client && (
                <>
                  <Col span={12}>
                    <Form.Item label="Имя" required name="firstName">
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="Фамилия" required name="lastName">
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="Телефон" required name="phone">
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="E-mail" required name="email">
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
                <Form.Item label="Дата заезда и отъезда" required name="dates">
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
                    const days = getCountSelectedDays(getFieldValue('dates'));

                    return days ? (
                      <Typography.Text>
                        Количество дней:
                        <Typography.Title level={4}>{days}</Typography.Title>
                      </Typography.Text>
                    ) : null;
                  }}
                </Form.Item>
              </Col>
            </Row>
          </Collapse.Panel>

          <Collapse.Panel key="pets" header="Питомцы">
            <Form.List name="pets" initialValue={[{ type: PET_TYPES_OPTIONS[0].value }]}>
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
                          <Form.Item label="Кличка" required name={[name, 'name']} {...restField}>
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Возраст" required name={[name, 'age']} {...restField}>
                            <InputNumber />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Кастр./Стер." required name={[name, 'reproductionType']} {...restField}>
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
                          <Form.Item label="Особые отметки" required name={[name, 'additional']} {...restField}>
                            <Input.TextArea />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Комментарии" required name={[name, 'comments']} {...restField}>
                            <Input.TextArea />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Card>
                  ))}

                  <Button onClick={add}>Добавить питомца</Button>
                </>
              )}
            </Form.List>
          </Collapse.Panel>
        </Collapse>

        <Form.Item dependencies={['dates', 'room']} className="orders-drawer__total-price">
          {({ getFieldValue }) => {
            const days = getFieldValue('dates');
            const roomId = getFieldValue('room');
            const price = getTotalPrice(days, roomId);

            return price ? <Typography.Title level={5}>Общая стоимость: {price}</Typography.Title> : null;
          }}
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form>
    </Drawer>
  );
};
