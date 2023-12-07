# Welcome to Parishar

_**parisar**_ (campus) is my personal one stop shop for all my project showcases , announcements , podcast and portfolio.

### Why I started this ?

Started as barely porforlio exercise I quickly realised most of my work has been with clients and have little to show on my personal Github, I started shaping  parisar to become my long term application to express my self.

### What will you find here ?
- I am planning to host all my new personal projects here like my podast `Half-byte Broadcast` and open source project `The _InSight Project`.
- I will also post annoucments about things I am learning , upskilling on or just in general exicted about.
- I have a my career timeline and updated resume for potential employeers.
I also host a semi technical podcast called
`Half-byte Broadcast` in here .
So if intrested please check it out.


### Technical Architecture
- `Frontend` - The UI is written in React and `Typescript` using `Material` as primary CSS library. UI is responsive and works well with desktop and mobile views.

- `Backend` - To Keep things simpler, I chose to use serverless AWS lamba architecture. `All lambdas` are written in `Go` providing small bundle sizes and fast response time

- `Admin Dashboard` -I have also been Light weight Dashboard is still in progress and is a seperate Entity primarly will be used by me for updates . Written in `Alpine JS` and `Tailwind`

- `Database` - As a cost reduction strategy I decided to build a single Big Datastore with `Planet Scale DaaS with mySQL` called `DaftarKhana` (stay tuned for more in)
and currently `Parisar` saves the data in `DaftarKhana` tables as well as utilizes `AWS S3` for object storage.

- `Hosting` - Both UIs are hosted with `CloudFlare Pages ` while `The _InSights Projects ` utilizes `Github pages`

- `CI/CD` - setup is in progress and is currently use `Terraforms` and `AWS SAM and Cloudformatons`

- `Authentication/Authorziation` - setup is in progress and will leverage `Auth0`


### Architecture Diagram

![Alt text](/assets/image.png)
Leave a comment if you like it.

