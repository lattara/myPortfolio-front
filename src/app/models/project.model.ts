import { ToolboxItem } from './toolboxItem';

export class Project {
    id!: number;
    name!: string;
    description!: string;
    // tslint:disable-next-line: variable-name
    youtube_link!: string;
    // tslint:disable-next-line: variable-name
    github_link!: string;
    toolbox?: ToolboxItem[] = [];
}
