import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.scss";

import { Button, Form, Input } from "antd";
import BreadCrumbs from "../../../components/common/Breadcrumbs";
import Card from "../../../components/common/Card";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const [inquryMessage, setInquryMessage] = useState();
  const [form] = Form.useForm();

  // Function to handle form submission
  const handleSubmit = async (values) => {
    console.log(values);
  };

  //Set student inqury message
  const handleInquiryChange = (e) => {
    setInquryMessage(e.target.value);
  };

  // rest From Fields
  const hanldeCancel = () => {
    form.resetFields();
  };

  console.log(data);
  return (
    <>
      <BreadCrumbs />
      <Card>
        <p style={{ fontSize: "34px" }}>{data.message}</p>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{}}
        >
          <div className="row">
            <div className="col-md-12">
              <h3 className="pageLabel mar-bottom-18">
                Please, write your question
              </h3>
            </div>

            <Form.Item
              className="col-xl-6 col-md-8 form-group"
              // label="Write your question"
              labelWrap={true}
              name="urgency"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <div className="inquiry">
              <Form.Item
                className="col-xl-6 col-md-8 form-group"
                label="Your Inquiry"
                labelWrap={true}
                name="inquiry"
                rules={[
                  {
                    required: true,
                    message: "Please enter your question",
                  },
                ]}
              >
                <textarea
                  className="inquiry-text"
                  value={inquryMessage} // Set the value of the textarea
                  onChange={handleInquiryChange} // Update inquiryMessage on change
                ></textarea>
              </Form.Item>
            </div>

            <div className="col-xl-12 d-flex justify-content-end mar-top-8">
              <Button onClick={hanldeCancel} className="mar-right-8">
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </div>
          </div>
        </Form>
      </Card>
    </>
  );
};

export default Home;
