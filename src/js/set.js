class Team {
  constructor() {
      this.members = new Set();
  }
  
  add(member) {
    if (this.members.has(member)) {
      throw new Error (`Объект с именем ${member.name} уже существует`)
    } else {
      this.members.add(member)
    }
  }

  addAll(...members) {
    members.forEach((member) => {
      this.members.add(member)
    })
  }

  toArray() {
    return Array.from(this.members)
  }
}

module.exports = Team;
