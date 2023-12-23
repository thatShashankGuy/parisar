
<section>
    <div class="timeline">
        <div class="timeline-item">
            <div class="timeline-date">2022 onwards</div>
            <div class="timeline-content">
                <h3>Senior Software Engineer @ <i>Winjit Technologies</i></h3>
                <p>Architecture and development across multiple <br> teams on various 
                    projects and technologies </p>

            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-date">2021 - 2022</div>
            <div class="timeline-content">
                <h3>Software Engineer @ <i>Winjit Technologies</i></h3>
                <p>Full stack development and testing with <br> 
                    cloud native technolgies </p>
                
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-date">2018 -2021</div>
            <div class="timeline-content">
                <h3>Senior Associate Software Development @ <i>NTT DATA</i></h3>
                <p>Developing and supporting large porfolio <br>  of on-prem and 
                    cloud applications and tools </p>
            </div>
        </div>

    </div>
</section>

<style>

section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        padding-top: 2.2rem;
        padding-bottom: 0.2rem;
    }
    p{
        font-size: x-large;
        text-align: left;
    }

    @media (max-width: 768px) {
        p{
            font-size: small;
        }
    }
.timeline {
    position: relative;
    margin: 20px;
}

.timeline-item {
    display: flex;
    margin-bottom: 20px;
}

.timeline-date {
    min-width: 100px;
    background-color: #ffbbec;
    color: #333;
    text-align: center;
    padding: 10px;
    font-size: medium;
    font-weight: bold;
    border-radius: 5px;
}

.timeline-content {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-left: 10px;
    position: relative;
    text-align: left;
    color: #333;
}

.timeline h3 {
    margin-top: 0;
}

.timeline p {
    margin-bottom: 0;
}

</style>