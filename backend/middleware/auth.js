import jwt from 'jsonwebtoken'

const authUser = async (req,res,next)=>{
    const {token}=req.headers;

    if(!token){
        
    }
}