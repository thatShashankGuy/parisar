CREATE TABLE half_byte_Table(
    pK integer not null AUTO_INCREMENT ,
    serialNo varchar (100) not null,
    title varchar(255) not null,
    episodId varchar(100) not null,
    metadata JSON,
    PRIMARY KEY(pK)
);

CREATE TABLE feedback_Table(
        pK integer not null AUTO_INCREMENT ,
        email varchar(255),
        comment text not null,
        source varchar(255) not null,
        PRIMARY KEY(pK)
);