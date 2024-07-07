import instance from "./instance"

export const sendMail = async (mailData: any) => {
    const result = await instance.post('/mail', mailData)

    return result.data
}