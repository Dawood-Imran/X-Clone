import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId,res) =>{

    const token = jwt.sign({userId},process.env.jWT_SECRET,{
        expiresIn: '15d'
    })

    res.cookie("jwt",token,{
        maxAge: 1296000000,// 15 days in miliseconds
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'development' 
    })
}