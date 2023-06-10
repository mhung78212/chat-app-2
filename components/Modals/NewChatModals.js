import { Form, Modal } from "antd"
import { Input } from "postcss"
import { useState } from "react";

const NewChatModals = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
      <Modal
                    title="Tạo phòng"
                    // visible={isAddRoomVisible}
                    // onOk={handleOk}
                    // onCancel={handleCancel}
                >
                    <Form layout="vertical">
                        <Form.Item label="Tên phòng" name="name">
                            <Input placeholder="Nhập tên phòng" />
                        </Form.Item>
                        <Form.Item label="Mô tả" name="description">
                            <Input.TextArea placeholder="Nhập mô tả" />
                        </Form.Item>
                    </Form>
                </Modal>
    </div>
  )
}

export default NewChatModals
