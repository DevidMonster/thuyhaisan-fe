import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import Title from 'antd/es/typography/Title';
import { Link } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import { info } from '../../../constants/info';
import { Helmet } from 'react-helmet';
import { sendMail } from '../../../api/sendMail';
import { useState } from 'react';

const ContactPage = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const handleSendMail = async (values: { name: string, email: string, phoneNumber: string, content: string }) => {
      setIsLoading(true)
      const data = await sendMail({
         ...values,
         subject: "message from " + values.email,
      })
         .catch(e => message.error("Đã có lỗi trong quá trình gửi"))

      if (data.status === 201) {
         message.success("Đã gửi thông tin")
      }
      setIsLoading(false)
   }
   return (
      <>
         <Helmet>
            <title>Liên hệ</title>
         </Helmet>
         <div className='main'>
            <section className='section-breadcrumb py-[15px] bg-[#f7f7f7] border-b-[1px] border-[#e2e2e2]'>
               <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] flex max-lg:flex-wrap items-start relative'>
                  <span>
                     <Link to='/'>Trang chủ </Link> / Liên hệ
                  </span>
               </div>
            </section>
            <section className=' lg:py-[100px] md:py-[80px] max-md:py-[60px]'>
               <div className=' mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] '>
                  <div className=''>
                     <div className='contact-main flex gap-7 flex-wrap  lg:flex-nowrap'>
                        <div className='contact bg-cover w-[50%] max-lg:w-full'>
                           <div
                              style={{ borderRadius: `5px`, padding: `15px` }}
                              className='infor-contact primary-bg mb-5 '
                           >
                              <Title className='text-start' level={3}>
                                 NƯỚC MẮM PHÚ NGHĨA
                              </Title>
                              <ul style={{ padding: `10px` }} className='flex text-4xl flex-wrap gap-1 w-[100%]  '>
                                 <li className='w-[100%] gap-3 flex items-center  '>
                                    <div>
                                       <EnvironmentOutlined />
                                    </div>
                                    <div className='text-sm'>
                                       <Title level={5}>Địa chỉ</Title>
                                       <p>
                                          {info.address}
                                       </p>
                                    </div>
                                 </li>

                                 <li className='w-[100%] gap-3 flex items-center'>
                                    <div>
                                       <PhoneOutlined />
                                    </div>
                                    <div className='text-sm'>
                                       <Title level={5}>Số điện thoại</Title>

                                       <a href={'tel:' + info.phoneNumber} className='call-phonenumber text-[16px]'>{info.phoneNumber}</a>
                                    </div>
                                 </li>

                                 <li className='w-[100%] gap-3 flex items-center'>
                                    <div>
                                       <MailOutlined />
                                    </div>
                                    <div className='text-sm'>
                                       <Title level={5}>Email</Title>
                                       <a href={'mailto:' + info.email} rel="noreferrer" target='_blank' className='hover:underline'>{info.email}</a>.
                                    </div>
                                 </li>
                              </ul>
                           </div>

                           <div
                              style={{ borderRadius: `5px`, padding: `15px` }}
                              className='form-contact  primary-bg mt-5'
                           >
                              <Title className='text-start' level={3}>
                                 Gửi yêu cầu của bạn
                              </Title>
                              <h2>
                                 Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại
                                 với bạn sớm nhất có thể .
                              </h2>
                              <Form className='mt-5' onFinish={handleSendMail}>
                                 <Form.Item
                                    name='name'
                                    rules={[{ required: true, message: 'Vui lòng điền họ và tên!' }]}
                                 >
                                    <Input placeholder='Họ và tên' />
                                 </Form.Item>
                                 <Form.Item name='email' rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
                                    <Input type='email' placeholder='Email' />
                                 </Form.Item>
                                 <Form.Item
                                    name='phoneNumber'
                                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                                 >
                                    <Input type='number' placeholder='Số điện thoại' />
                                 </Form.Item>
                                 <Form.Item
                                    name={"content"}
                                    rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
                                 >
                                    <TextArea placeholder='Nội dung' rows={5}></TextArea>
                                 </Form.Item>
                                 <Button loading={isLoading} htmlType='submit' className='bg-redTextColor text-white'>Gửi thông tin</Button>
                              </Form>
                           </div>
                        </div>
                        <div className='address-contact w-[60%]  max-lg:w-full'>
                           <iframe
                              title='Địa chỉ cụ thể'
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15066.098747305743!2d105.66566654241022!3d19.259536068409222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3137735455674561%3A0x6794015cab17a344!2zdGjDtG4gNiwgUXXhu7NuaCBUcmFuZywgSG_DoG5nIE1haSwgTmdoZSBBbiwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1715496977535!5m2!1sen!2s"
                              width="100%"
                              height="500"
                              loading="lazy">
                           </iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};

export default ContactPage;
