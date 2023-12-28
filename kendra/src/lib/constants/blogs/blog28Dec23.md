---
title: Database Paradigms:\ ACID, BASE and CAP in brief
author: Shashank Shekhar
date: December 28, 2023
---

# Database Paradigms: ACID, BASE, and CAP in brief

##### December 28, 2023

--- 

When starting a project, one of the earliest design decisions you need to make is selecting a database. There are various databases available in the market. 

Initially, most databases were of SQL flavors, grouped as Relational Databases, and they used the de facto method of saving data into tables and establishing relationships between these tables. You can read more about [History of SQL](https://learnsql.com/blog/history-of-sql/). 

However, with the advent of NoSQL databases, this paradigm was challenged, opting for a more relaxed and schema-less approach, saving data as objects rather than in rigid tables with relationships.

## Transactional Models

Changes to a database, such as writes, updates, or deletes, are carried out through transactions. _A transaction represents a unit of work performed within a database management system (DBMS) against a database_. Database Transaction Models are a set of rules that determine how a DBMS organizes, stores, and manipulates data. A DBMS can support multiple transaction models, and a transaction will adhere to the ruleset of the chosen transaction model.

_There are two major transaction models: **ACID and BASE**._

### ACID - Atomicity, Consistency, Isolation, and Durability

ACID properties define a set of guarantees that a DBMS must provide to ensure data consistency and reliability, even in the face of system failures._Most of RDBMS are ACID compliant_

- **Atomicity** ensures that a transaction is treated as a single, indivisible unit of work. If any part of a transaction fails (e.g., due to an error or exception), the entire transaction is rolled back, and the database remains unchanged. Atomicity ensures that the database is always in a consistent state, even in the presence of failures.

- **Consistency** guarantees that a transaction brings the database from one consistent state to another consistent state. It enforces integrity constraints, ensuring that data remains valid and adheres to defined rules and constraints.

- **Isolation** ensures that concurrent transactions do not interfere with each other. Each transaction appears to run in isolation, as if it were the only transaction being processed. It prevents one transaction from reading or modifying data that another transaction is currently modifying.

- **Durability** guarantees that once a transaction is committed, its effects will persist even in the event of a system crash or failure. This involves writing data to non-volatile storage, such as hard drives.

Consider a banking system where customers can transfer money between accounts, make deposits, and withdraw funds. ACID properties prevent issues such as incomplete transactions due to system failures, incorrect balances, or data violations.

### BASE - Basically Available, Soft State, Eventually Consistent

BASE is often used in distributed and NoSQL databases where strict ACID guarantees are not required, and a degree of eventual consistency is acceptable.

- In **Basically Available**, the emphasis is on providing basic availability of the system. Even if failures occur, the system remains operational and responsive to user requests, although it may not provide real-time consistency.

- **Soft state** means that the state of the system can change over time, even without input, due to factors like eventual consistency, background processes, or the expiration of temporary data.

- **Eventually consistency** implies that, given time and no further updates, all replicas of the data in a distributed system will converge to the same state. It acknowledges that in a distributed environment, immediate consistency might not always be achievable due to network delays and the distributed nature of the system.

Consider a social media distributed app where fast performance takes precedence over immediate data consistency. In such cases, trading off atomicity and consistency for basic availability and eventual consistency is more sensible.

### ACID and BASE Are Not in Direct Contrast

It's important to note that ACID and BASE serve drastically different use cases and often need to be used together in large systems that allow multiple types of transactions.

## CAP Theorem

While working with distributed systems, we also need to consider the CAP theorem.

The CAP theorem, also known as Brewer's theorem, is a fundamental concept in distributed computing that describes the trade-offs that distributed systems must make between three key properties: Consistency, Availability, and Partition Tolerance.

- **Consistency (C)** refers to the requirement that all nodes in a distributed system have the same data at the same time.

- **Availability (A)** means that every request made to a distributed system, whether for reading or writing data, should receive a response, without guaranteeing that the response contains the most up-to-date data.

- **Partition Tolerance (P)** is the ability of a distributed system to continue functioning and providing responses even when there are network partitions or communication failures between nodes.

According to the CAP theorem, it is impossible for a distributed system to simultaneously achieve all three properties (Consistency, Availability, and Partition Tolerance) at their maximum levels. Instead, distributed systems must make trade-offs among these properties.

- **CP (Consistency and Partition Tolerance):** In a CP system, consistency is prioritized over availability. The system ensures that all nodes have the most recent data and can tolerate network partitions, but it may sacrifice availability when network issues occur. This approach is typical in databases that prioritize data consistency.

- **CA (Consistency and Availability):** In a CA system, consistency and availability are prioritized, but it may not be able to tolerate network partitions. Such systems may choose to reject requests or wait for network issues to be resolved before responding. These systems are often found in traditional, non-distributed databases.

- **AP (Availability and Partition Tolerance):** In an AP system, availability and partition tolerance are prioritized over strict consistency. The system may provide responses even if the data is not immediately consistent across all nodes. This approach is common in distributed NoSQL databases and systems that need to stay operational in the presence of network partitions.

In conclusion, ACID and BASE transaction models, along with the CAP theorem, play pivotal roles in the design and operation of modern database systems. Each has its own strengths and trade-offs, making them suitable for specific use cases. Understanding these paradigms is essential for making informed decisions in database design and architecture.

## Further Reading and References

- [AWS Blog on ACID and BASE](https://aws.amazon.com/compare/the-difference-between-acid-and-base-database/)
- [CAP Theorem by ScyllaDB](https://www.scylladb.com/glossary/cap-theorem/)
- [Critique of CAP Theorem](https://www.cl.cam.ac.uk/research/dtg/archived/files/publications/public/mk428/cap-critique.pdf)
- [ACID - Wikipedia](https://en.wikipedia.org/wiki/ACID)

--- 

##### _Published by Shashank_