
import { useEffect, useState } from "react"
import GetCode from "./components/GetCode"
import SubmitCode from "./components/SubmitCode"
import ChangePassword from "./components/ChangePassword"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { IAuth } from "../../../slices/authSlice"
import { Helmet } from "react-helmet"


const ForgetPassword = () => {
  const navigate = useNavigate()
  const auth = useSelector((state: { userReducer: IAuth }) => state.userReducer);
  useEffect(() => {
    if (auth?.user?._id) {
      navigate("/login")
    }
  }, [])
  const [step, setStep] = useState<number>(1)


  const changeStep = (value: number) => {
    setStep(value)
  }

  return <>
    <Helmet>
      <title>Quên mật khẩu</title>
    </Helmet>
    {step == 1 && <GetCode changeStep={changeStep}></GetCode>}
    {step == 2 && <SubmitCode changeStep={changeStep}></SubmitCode>}
    {step == 3 && <ChangePassword ></ChangePassword>}

  </>
}
export default ForgetPassword