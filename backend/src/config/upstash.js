import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis"

import dotenv from "dotenv";
dotenv.config();


//Ratelimiter for allowing 10 requests per 20 second 

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv() , 
    limiter: Ratelimit.slidingWindow(60 ,  "100 s")
}) 

export default ratelimit ;