import React, { useState } from "react";

import "./style.scss";

import { Button, Form, Select } from "antd";
import BreadCrumbs from "../../components/common/Breadcrumbs";
import Card from "../../components/common/Card";
const { Option } = Select;

const category = [
  "Technical issue",
  "Tutor-related",
  "Timing-related",
  "Subject-related",
  "Other matter",
];

const urgency = ["High", "Medium", "Low"];

const Helpline = () => {
  const [inquryMessage, setInquryMessage] = useState("");
  const [form] = Form.useForm();

  // Function to handle form submission
  const handleSubmit = async (values) => {
    console.log("Submit");
  };

  //Set student inqury message
  const handleInquiryChange = (e) => {
    setInquryMessage(e.target.value);
  };

  // Function to handle subject selection
  const handleSubjectChange = (value) => {
    form.setFieldValue(value);
    console.log("false value");
  };

  return (
    <>
      <BreadCrumbs />
      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{}}
        >
          <div className="row">
            <div className="col-md-12">
              <h3 className="pageLabel mar-bottom-18">
                Please, write your inqury
              </h3>
            </div>

            <Form.Item
              className="col-xl-6 col-md-8 form-group"
              label="Select a category"
              labelWrap={true}
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Please select a category",
                },
              ]}
            >
              <Select
                placeholder="Select category"
                onChange={handleSubjectChange}
              >
                {category.map((subject) => (
                  <Option key={subject} value={subject}>
                    {subject}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              className="col-xl-6 col-md-8 form-group"
              label="How urgent is your inquiry?"
              labelWrap={true}
              name="urgency"
              rules={[
                {
                  message: "Please select an urgency",
                },
              ]}
            >
              <Select>
                {urgency.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
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
                    message: "Please enter your inquiry",
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
              <Button className="mar-right-8">Cancel</Button>
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

export default Helpline;
