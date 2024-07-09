export class StaffMember {
    id: number;
    firstName: string;
    lastName: string;
    hiredDate: Date;
    team: string;

    constructor(id: number, firstName: string, lastName: string, hiredDate: Date, team: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.hiredDate = hiredDate;
        this.team = team;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getTeam(): string {
        return this.team;
    }
}