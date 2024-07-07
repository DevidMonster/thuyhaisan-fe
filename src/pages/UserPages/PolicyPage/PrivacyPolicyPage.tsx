import Title from "antd/es/typography/Title"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

const PrivacyPolicyPage = () => {
  return (
    <div className='main'>
      <Helmet>
        <title>Chính sách bảo mật</title>
      </Helmet>
      <section className='section-breadcrumb py-[15px] bg-[#f7f7f7] border-b-[1px] border-[#e2e2e2]'>
        <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] flex max-lg:flex-wrap items-start relative'>
          <span>
            <Link to='/'>Trang chủ </Link>/ chính sách / Chính sách bảo mật
          </span>
        </div>
      </section>
      <div className=' mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] '>
        <div className=' xl:w-[90%] lg:w-[60%] md:w-[70%] max-md:w-[100%] m-auto  '>
          <section className=' lg:py-[100px] md:py-[80px] max-md:py-[60px]'>
            <Title className='text-center font-extrabold primary-font-bg' level={1}>
              CHÍNH SÁCH BẢO MẬT
            </Title>
            <div className="h-auto w-full flex flex-col gap-7" id="toc-content">
              <h3>&nbsp;</h3>

              <h3 className="font-bold">1.&nbsp; Mục đích và phạm vi thu thập thông tin</h3>

              <p>– Làm cơ sở dữ liệu để liên hệ, chăm sóc, tư vấn cho khách hàng gồm:</p>

              <p>
                - Họ tên<br />
                - Địa chỉ email<br />
                - Số điện thoại<br />
                - Chủ đề liên hệ<br />
                - Nội dung liên hệ
              </p>

              <h3 className="font-bold">2. Phạm vi sử dụng thông tin</h3>

              <p>Chúng tôi chỉ sử dụng thông tin được khách hàng cung cấp từ tại nội bộ công ty.</p>

              <p>Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với bạn dưới các hình thức như: gởi thư ngỏ, thư cảm ơn, thông tin về kỹ thuật …</p>

              <h3 className="font-bold">3. Thời gian lưu trữ thông tin</h3>

              <p>Chúng tôi&nbsp;sẽ lưu trữ các thông tin cá nhân do khách hàng cung cấp trên các hệ thống nội bộ của chúng tôi trong quá trình cung cấp dịch vụ cho khách hàng hoặc cho đến khi hoàn thành mục đích thu thập hoặc khi khách hàng có yêu cầu hủy các thông tin đã cung cấp.</p>

              <h3 className="font-bold">4. Chia sẻ thông tin cá nhân</h3>

              <p>Ngoại trừ các trường hợp về sử dụng thông tin cá nhân như đã nêu trong chính sách này, chúng tôi cam kết sẽ không tiết lộ thông tin cá nhân bạn ra ngoài.</p>

              <p>Chúng tôi có thể tiết lộ hoặc cung cấp thông tin cá nhân của bạn trong các trường hợp thật sự cần thiết như sau:</p>

              <p>(a) Khi có yêu cầu của các cơ quan pháp luật;</p>

              <p>(b) Trong trường hợp mà chúng tôi tin rằng điều đó sẽ giúp chúng tôi bảo vệ quyền lợi chính đáng của mình trước pháp luật;</p>

              <h3 className="font-bold">5. Truy xuất thông tin cá nhân</h3>

              <p>Bất cứ thời điểm nào bạn cũng có thể truy cập và gửi yêu cầu thay đổi thông tin cá nhân (điện thoại, email) theo form liên hệ chúng tôi đã cung cấp.</p>

              <h3 className="font-bold">6. Bảo mật thông tin cá nhân</h3>

              <p>Chúng tôi&nbsp;cam kết bảo mật thông tin cá nhân của bạn bằng mọi cách thức có thể. Chúng tôi sẽ sử dụng nhiều công nghệ bảo mật thông tin khác nhau nhằm bảo vệ thông tin này không bị truy lục, sử dụng hoặc tiết lộ ngoài ý muốn.<br />
                <br />
                Quy định về “Spam” : Chúng tôi thực sự quan ngại đến vấn nạn Spam (thư rác), các Email giả mạo danh tín chúng tôi gởi đi. Do đó, chúng tôi khẳng định chỉ gởi Email đến bạn khi và chỉ khi bạn có đăng ký hoặc sử dụng dịch vụ từ hệ thống của chúng tôi. Chúng tôi cam kết không bán, thuê lại hoặc cho thuê email của bạn từ bên thứ ba. Nếu bạn vô tình nhận được Email không theo yêu cầu từ hệ thống chúng tôi do một nguyên nhân ngoài ý muốn, xin vui lòng nhấn vào link từ chối nhận Email này kèm theo, hoặc thông báo trực tiếp đến ban quản trị Website chúng tôi.</p>

              <h3 className="font-bold">7. Thay đổi về chính sách</h3>

              <p>Nội dung của “Chính sách bảo mật” này có thể thay đổi để phù hợp với các nhu cầu của chúng tôi cũng như nhu cầu và sự phản hồi từ khách hàng nếu có. Khi cập nhật nội dung chính sách này, chúng tôi sẽ chỉnh sửa lại thời gian “Cập nhật” bên trên.</p>

              <h3 className="font-bold">8. Thông tin liên hệ</h3>

              <p>Chúng tôi luôn hoan nghênh các ý kiến đóng góp, liên hệ và phản hồi thông tin từ bạn về “Chính sách bảo mật” này. Nếu bạn có những thắc mắc liên quan xin vui lòng liên hệ theo địa chỉ Email: <u>nuocmamphunghia@gmail.com</u></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage