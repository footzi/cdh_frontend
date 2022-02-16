//@ts-nocheck
import './index.less';

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
  Typography,
} from 'antd';
import { Client } from 'interfaces';
import React, { useCallback, useEffect, useState } from 'react';

export interface OrderDrawer {
  isOpen: boolean;
  onClose(): void;
  clients: Client[];
}

interface SelectOption {
  label: string;
  value: string;
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

export const OrderDrawer: React.FC<OrderDrawer> = ({ isOpen, onClose, clients }) => {
  const [client, setClient] = useState<Client | null>(null);
  const { options, search } = useSearchClient(clients);

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
    if (client) {
      form.setFieldsValue({
        firstName: client.firstName,
        lastName: client.lastName,
        phone: client.phone,
        email: client.email,
      });
    }
  }, [client]);

  // console.log(optionsAll);

  // onClose={onClose}
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
                <Form.Item label="Номер" required name="room">
                  <Select></Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Дата заезда и отъезда" required name="startDate">
                  <DatePicker.RangePicker />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Статус" required name="status">
                  <Select></Select>
                </Form.Item>
              </Col>

              <Col span={12} className="orders-drawer__days-count">
                <Typography.Text>Количество дней: 5</Typography.Text>
              </Col>
            </Row>
          </Collapse.Panel>

          <Collapse.Panel key="pets" header="Питомцы">
            <Card>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Вид" required name="e-mail">
                    <Select />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Кличка" required name="e-mail">
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Возраст" required name="e-mail">
                    <InputNumber />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Кастр./Стер." required name="e-mail">
                    <Select />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Особые отметки" required name="e-mail">
                    <Input.TextArea />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Комментарии" required name="e-mail">
                    <Input.TextArea />
                  </Form.Item>
                </Col>
              </Row>
            </Card>

            <Button>Добавить питомца</Button>
          </Collapse.Panel>
        </Collapse>

        <Typography.Title level={5}>Общая стоимость 10 000 руб</Typography.Title>

        <Button type="primary" htmlType="submit">
          Cохранить
        </Button>

        {/*<Button>Сохранить</Button>*/}

        {/*<Typography.Title level={5}>Номер</Typography.Title>*/}

        {/*<Typography.Title level={5}>Питомец</Typography.Title>*/}
      </Form>
    </Drawer>
  );
};
