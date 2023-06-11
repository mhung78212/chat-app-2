/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button, Card, Form, Input, Typography } from "antd";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import Link from "next/link";

const { Title } = Typography;

export default function Login() {
    return (
        <div className="bg-[#a7bcff] flex items-center justify-center h-screen">
            <Card style={{ width: 300 }}>
                <div className="flex items-center justify-center">
                    <Title level={2}>Chat App</Title>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
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

                    <Form.Item>
                        <div className="flex items-center justify-between">
                            <Button icon={<BsFacebook />}>Facebook</Button>
                            <Button icon={<BsGoogle />}>Google</Button>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            block
                        >
                            Log in
                        </Button>
                        <div style={{ marginTop: "1em" }}>
                            Don't have an account?{" "}
                            <Link href="/signup">Sign up</Link>
                        </div>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
