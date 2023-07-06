class Coaching {
    constructor(subject, level, rate ) {
        this.subject = subject;
        this.level = level;
        this.rate = rate;
        this.active = true;
    }

    print() {
        console.log(this);
    }
}

export { Coaching }