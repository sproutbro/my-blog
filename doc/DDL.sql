CREATE TABLE
    users (
        id TEXT PRIMARY KEY,
        nickname TEXT,
        provider TEXT, -- kakao, google 등
        created_at TIMESTAMP DEFAULT NOW ()
    );


    