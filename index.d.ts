export declare type ValidateMethod = (filename: string) => Boolean
export declare interface IConfig
{
    imagePath: string
    distPath: string
    groups: GroupItem[]
    credits: CreditItem[]
    headerContent: string
    footerContent: string
}
export declare interface GroupItem
{
    name: string
    expression: RegExp
    files?: string[]
}
export declare interface CreditItem
{
    link: string,
    validate?: ValidateMethod
    files?: string[]
}