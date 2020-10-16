export class Toolbox {
    projects_id !: number;
    toolbox_item_id!: number;

    constructor(input: Toolbox) {
    Object.assign(this, input);
}
}
