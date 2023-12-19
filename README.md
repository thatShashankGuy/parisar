# Welcome to _**parisar + dafatarkhana**_

_**parisar**_ (campus) is my repository setup on github for `Web UI + Backend Code + AWS infra configuration` for all my project showcases , announcements , podcast and portfolio.

__**daftarkhana**__ (record room) is a small `database + object storage (AWS S3) setup along with various CI/CD tooling` helping me to keep parisar up and running

### Why I started this ?

Started as barely porforlio exercise I quickly realised most of my work has been with clients and have little to show on my personal Github, I started shaping  parisar to become my long term application to express my self.

### What will you find here ?
- I will post announcements about things I am learning , upskilling on or just in general exicted about as micro-blogs/News Later here.
- I have a my career timeline and updated resume for potential employeers.
- I also host a semi technical podcast called
  `vartalaap` in here .
So if interested please check it out.
- The Web UI also have a link to `nibandh` my open source projects consisting of mutiple technical writings


### Technical Architecture
- `Web UI` - The UI is written in `React` and `Typescript` using `Material` as primary CSS library. UI is responsive and works well with desktop and mobile views.

- `Severless Backend` - To Keep things simpler, I chose to use serverless AWS lamba architecture. `All lambdas` are written in `Go` providing small bundle sizes and fast response time

- `Admin CLI Tool` -I have also been Light weight Dashboard is still in progress and is built in `go`'s std library as  a CLI tool

- `Database` - for database I utilize `Planet Scale DaaS with mySQL`  - part of  `DaftarKhana` .  `Parisar` saves the data in `DaftarKhana` tables as well as utilizes `AWS S3` for object storage.

- `Hosting` - Both UIs are hosted with `CloudFlare Pages ` while `nibandh ` utilizes `Github pages`

- `CI/CD` - setup is in progress and is currently use `Terraforms` and `AWS SAM and Cloudformatons`

- `Authentication/Authorziation` - setup is in progress and will leverage `Auth0` and `Daftarkhana` setup


### Architecture Diagram

![Alt text](/assets/fullarch.png)
Leave a star if you like it.

