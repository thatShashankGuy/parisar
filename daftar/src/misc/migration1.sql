CREATE TABLE vartalaap_Table (
    pK integer NOT NULL AUTO_INCREMENT,
    serialNo varchar(100) NOT NULL,
    title varchar(255) NOT NULL,
    episodeId varchar(100) NOT NULL,
    metadata JSON,
    createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (pK)
);
CREATE TABLE feedback_Table (
    pK integer NOT NULL AUTO_INCREMENT,
    email varchar(255),
    comment text NOT NULL,
    source varchar(255) NOT NULL,
    createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (pK)
);

CREATE TABLE blogs_Table(
    pk integer NOT NULL AUTO_INCREMENT,
    title varchar(255),
    author varchar(255),
    date varchar(255),
    link varchar(255),
    content text
    createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    PRIMARY KEY(pK)
)

