//  Rate Limiter 
// @author Debottam Kar
const print = console.log;

let rateLimiter = {};

async function middleware(req) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let load = rateLimiter[req.ip];
            if (load) {
                if (load.endtime >= Date.now() && load.count >= 10) {
                    print("Limit Reached! for: ip", req.ip);
                } else if (load.endtime < Date.now()) {
                    rateLimiter[req.ip] = { count: 1, endtime: Date.now() + (60 * 1000) };
                    print("This is the response for: ip", req.ip);
                } else {
                    rateLimiter[req.ip] = { ...rateLimiter[req.ip], count: rateLimiter[req.ip].count + 1 };
                    print("This is the response for: ip", req.ip);
                }
                resolve("Done");
            } else {
                rateLimiter[req.ip] = { count: 1, endtime: Date.now() + (60 * 1000) };
                print("This is the response for: ip", req.ip);
                resolve("Done");
            }

        }, 500);
    });
}

// Saves the memory leak
setTimeout(() => {
    rateLimiter = {};
}, (5 * 60 * 1000));

// Testing
while (true) {
    await middleware({ ip: `22.240.88.${Math.floor(Math.random() * 6)}` });
}
