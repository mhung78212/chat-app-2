"use client";
import { Button, Card, Form, Input, Typography } from "antd";
import Link from "next/link";
import { AiOutlineLock } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const { Title } = Typography;

const Singup = () => {
    return (
        <div className="bg-[#a7bcff] flex items-center justify-center h-screen">
            <Card className="w-[300px]">
                <div className="flex justify-center">
                    <Title level={2}>Chat App</Title>
                </div>
                <Form
                    name="normal_signup"
                    className="signup-form"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<BiUserCircle />}
                            placeholder="Username"
                            type="email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<AiOutlineLock />}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "The two passwords that you entered do not match!",
                                        ),
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            placeholder="Confirm Password"
                            prefix={<AiOutlineLock />}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            block
                        >
                            Sign up
                        </Button>
                        <div className="mt-4">
                            Do you already have an account?{" "}
                            <Link href="/login">Log in</Link>
                        </div>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Singup;
