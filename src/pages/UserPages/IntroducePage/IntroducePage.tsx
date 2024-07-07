import Title from "antd/es/typography/Title"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"


const IntroducePage = () => {
    return (
        <>
            <Helmet>
                <title>Giới thiệu</title>
            </Helmet>
            <div className='main'>
                <section className='section-breadcrumb py-[15px] bg-[#f7f7f7] border-b-[1px] border-[#e2e2e2]'>
                    <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] flex max-lg:flex-wrap items-start relative'>
                        <span>
                            <Link to='/'>Trang chủ </Link> / Giới thiệu
                        </span>
                    </div>
                </section>
                <section className=' lg:py-[100px] md:py-[80px] max-md:py-[60px] '>
                    <div className=' mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] '>
                        <div className=' xl:w-[90%] lg:w-[60%] md:w-[70%] max-md:w-[100%] m-auto  '>
                            <div className='text-center'>
                                <Title level={1}>Về chúng tôi</Title>
                                <h2 className="primary-font-bg font-bold">NÔNG SẢN HOÀNG MINH LA - CHẤT LƯỢNG TINH HOA CỦA NÔNG SẢN VIỆT</h2>
                            </div>
                            <div className="h-auto w-full flex flex-col gap-7" id="toc-content"><p className="text-center">&nbsp;</p>

                                <p><span className="text-[16px]"><strong>Nông Sản Hoàng Minh L.A</strong> tự hào là đơn vị hàng đầu trong lĩnh vực cung cấp nông sản sấy khô và nông sản sấy dẻo tại Việt Nam. Với cam kết đem đến những sản phẩm chất lượng tinh hoa từ vùng đất màu mỡ và khí hậu thuận lợi, chúng tôi không chỉ đóng góp vào sự phong phú của bữa ăn mỗi gia đình mà còn góp phần nâng cao giá trị thương hiệu nông sản Việt trên thị trường quốc tế.</span></p>

                                <h1><span className="text-[18px]"><strong>Chất Lượng Vững Chắc</strong></span></h1>

                                <p><span className="text-[16px]">Nông Sản Hoàng Minh LA cam kết duy trì chất lượng tốt nhất từ quá trình chọn lựa nguyên liệu đến quá trình sản xuất. Chúng tôi tận dụng những tài nguyên thiên nhiên tốt nhất, từ đất đai màu mỡ đến ánh nắng mặt trời ấm áp, để tạo ra những sản phẩm sấy khô và sấy dẻo vô cùng ngon miệng và dinh dưỡng.</span></p>

                                <h1><strong><span className="text-[18px]">Nông Sản Xuất Khẩu</span></strong></h1>

                                <p><span className="text-[16px]">Với tầm nhìn toàn cầu, Nông Sản Hoàng Minh LA không chỉ hướng tới việc phục vụ nhu cầu nội địa mà còn là đối tác tin cậy cho các thị trường xuất khẩu. Chúng tôi không ngừng nỗ lực để đưa tên tuổi nông sản Việt Nam vươn xa, mang đến thế giới những sản phẩm tự nhiên và tinh khiết nhất.</span></p>

                                <h1><strong><span className="text-[18px]">Diversified Products - Đa Dạng Sản Phẩm</span></strong></h1>

                                <p><span className="text-[16px]">Với đội ngũ chuyên gia nông nghiệp và kỹ thuật viên tài năng, chúng tôi không chỉ chú trọng vào sự đa dạng về loại cây trồng mà còn trong việc tạo ra nhiều dạng sản phẩm sấy khô và sấy dẻo độc đáo. Từ trái cây quen thuộc như dứa, xoài đến những loại rau củ tươi ngon, chúng tôi mang đến nhiều lựa chọn cho người tiêu dùng.</span></p>

                                <h1><strong><span className="text-[18px]">Mục Tiêu Bền Vững</span></strong></h1>

                                <p><span className="text-[16px]">Nông Sản Hoàng Minh L.A không chỉ là doanh nghiệp kinh doanh, mà còn là đối tác chân thành của môi trường. Chúng tôi cam kết thực hiện quy trình sản xuất bền vững, giảm lượng chất phụ gia và bảo quản để giữ nguyên hương vị và giá trị dinh dưỡng của nông sản.</span></p>

                                <p><span className="text-[16px]">Nếu bạn đang tìm kiếm sự tươi mới và chất lượng trong thực phẩm hàng ngày, hãy đặt niềm tin vào Nông Sản Hoàng Minh L.A. Chúng tôi là điểm đến lý tưởng cho những người đam mê sự tự nhiên và đặc sản của đất nước.</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default IntroducePage