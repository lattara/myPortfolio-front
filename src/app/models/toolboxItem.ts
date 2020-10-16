export class ToolboxItem {
    id!: number;
    name!: string;
    shortcut!: string;
    masterLevel!: number;
    checked?: boolean; // accessible only to front

    constructor(input: ToolboxItem) {
    Object.assign(this, input);
}
}
