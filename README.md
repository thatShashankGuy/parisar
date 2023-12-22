# Welcome to _parisar_ 

### What is _parisar_?

  My one true repository hosting `Web UI + Backend Code + AWS infra configuration` for all my project showcases , announcements , podcast and portfolio.


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
- `UI - Kendra` - The The central UI is written in `React` and `Typescript` using `Material` as primary CSS library. UI is responsive and works well with desktop and mobile views.Consist of porfolio and show case project info

- `UI - Vartalaap` - The Audio Podcast UI written in `Sveltekit` and `JavaScript`. UI is mobile first and is lean with Minimal third party dependency. 

- `Backend - Daftar` - To Keep things simpler, I chose to use serverless AWS lamba architecture and is a central backbone of `Daftar`. `All lambdas` are written in `Go` providing small bundle sizes and fast response time

- `Database - Daftarkhana` - for database I utilize `Planet Scale DaaS with mySQL`I fondly named `Daftarkhana` .  `Daftar` saves the data in `Daftarkhana` tables as well as utilizes `AWS S3` for object storage.

- `Hosting` - Both UIs are hosted with `CloudFlare Pages ` while `nibandh ` utilizes `Github pages`

- `CI/CD` - setup is in progress and is currently use `Terraforms` and `AWS SAM and Cloudformatons`

- `Authentication/Authorziation` - setup is in progress and will leverage `Auth0` and `Daftarkhana` setup


### Architecture Diagram

![Alt text](/assets/fullarch.png)
Leave a star if you like it.

