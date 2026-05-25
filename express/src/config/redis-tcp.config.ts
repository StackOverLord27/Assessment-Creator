import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL;

export const redisTcp = redisUrl
	? new Redis(redisUrl)
	: new Redis({
			host: process.env.REDIS_HOST ?? "127.0.0.1",
			port: Number(process.env.REDIS_PORT ?? 6379),
			username: process.env.REDIS_USERNAME,
			password: process.env.REDIS_PASSWORD,
		});

export const disconnectRedisTcp = async () => {
	try {
		await redisTcp.quit();
	} catch (err) {
		// ignore
	}
};