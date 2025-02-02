import React from "react";
import {registerComponent, registerComponentDomain} from "../../../core";
import {
    generateComponents as coreGenerateComponents
} from "../../../core/components";
import {
    generateComponentsDomains as coreGenerateComponentsDomains
} from "../../../core/components";
import {domainDebug} from './Debug'
import {domainErrors} from "./Errors";

const Accordion = React.lazy(() => import('./Accordion'));
const App = React.lazy(() => import('./App'));
const ArrayAccordion = React.lazy(() => import('./ArrayAccordion'));
const ArrayCopy = React.lazy(() => import('./ArrayCopy'));
const Avatar = React.lazy(() => import('./Avatar'));
const Avatar_Group = React.lazy(() => import('./Avatar/Group'));
const Badge = React.lazy(() => import('./Badge'));
const Badge_Ribbon = React.lazy(() => import('./Badge/Ribbon'));
const Button = React.lazy(() => import('./Button'));
const Card = React.lazy(() => import('./Card'));
const Card_Grid = React.lazy(() => import('./Card/Grid'));
const Card_Meta = React.lazy(() => import('./Card/Meta'));
const Carousel = React.lazy(() => import('./Carousel'));
const Collapse = React.lazy(() => import('./Collapse'));
const Collapse_Panel = React.lazy(() => import('./Collapse/Panel'));
const Debug = React.lazy(() => import('./Debug'));
const Descriptions = React.lazy(() => import('./Descriptions'));
const Descriptions_Item = React.lazy(() => import('./Descriptions/Item'));
const Divider = React.lazy(() => import('./Divider'));
const Errors = React.lazy(() => import('./Errors'));
const Export = React.lazy(() => import('./Export'));
const Grid_Col = React.lazy(() => import('./Grid/Col'));
const Grid_Row = React.lazy(() => import('./Grid/Row'));
const Image_PreviewGroup = React.lazy(() => import('./Image/PreviewGroup'));
const Import = React.lazy(() => import('./Import'));
const Layout = React.lazy(() => import('./Layout'));
const Layout_Content = React.lazy(() => import('./Layout/Content'));
const Layout_Footer = React.lazy(() => import('./Layout/Footer'));
const Layout_Header = React.lazy(() => import('./Layout/Header'));
const Layout_Sider = React.lazy(() => import('./Layout/Sider'));
const List = React.lazy(() => import('./List'));
const List_Item = React.lazy(() => import('./List/Item'));
const List_Item_Meta = React.lazy(() => import('./List/Item/Meta'));
const Markdown = React.lazy(() => import('./Markdown'));
const OverPack = React.lazy(() => import('./OverPack'));
const Popover = React.lazy(() => import('./Popover'));
const Pricing = React.lazy(() => import('./Pricing'));
const QueueAnim = React.lazy(() => import('./QueueAnim'));
const Segmented = React.lazy(() => import('./Segmented'));
const Space = React.lazy(() => import('./Space'));
const Space_Compact = React.lazy(() => import('./Space/Compact'));
const Steps = React.lazy(() => import('./Steps'));
const Submit = React.lazy(() => import('./Submit'));
const Submit_Debug = React.lazy(() => import('./Submit/Debug'));
const Table = React.lazy(() => import('./Table'));
const Table_Summary = React.lazy(() => import('./Table/Summary'));
const Table_Summary_Col = React.lazy(() => import('./Table/Summary/Col'));
const Table_Summary_Row = React.lazy(() => import('./Table/Summary/Row'));
const Tabs = React.lazy(() => import('./Tabs'));
const TweenOne = React.lazy(() => import('./TweenOne'));
const Typography_Paragraph = React.lazy(() => import('./Typography/Paragraph'));
const Typography_Text = React.lazy(() => import('./Typography/Text'));
const Typography_Title = React.lazy(() => import('./Typography/Title'));


export function generateComponents(register = true, registerDomains = true) {
    const components = {
        ...coreGenerateComponents(),
        Accordion,
        App,
        ArrayAccordion,
        ArrayCopy,
        Avatar,
        "Avatar.Group": Avatar_Group,
        Badge,
        "Badge.Ribbon": Badge_Ribbon,
        Button,
        Card,
        "Card.Grid": Card_Grid,
        "Card.Meta": Card_Meta,
        Carousel,
        Collapse,
        "Collapse.Panel": Collapse_Panel,
        Debug,
        Descriptions,
        "Descriptions.Item": Descriptions_Item,
        Divider,
        Errors,
        Export,
        "Grid.Col": Grid_Col,
        "Grid.Row": Grid_Row,
        "Image.PreviewGroup": Image_PreviewGroup,
        Import,
        Layout,
        "Layout.Content": Layout_Content,
        "Layout.Footer": Layout_Footer,
        "Layout.Header": Layout_Header,
        "Layout.Sider": Layout_Sider,
        List,
        "List.Item": List_Item,
        "List.Item.Meta": List_Item_Meta,
        Markdown,
        OverPack,
        Popover,
        Pricing,
        QueueAnim,
        Segmented,
        Space,
        "Space.Compact": Space_Compact,
        Steps,
        Submit,
        "Submit.Debug": Submit_Debug,
        Table,
        "Table.Summary": Table_Summary,
        "Table.Summary.Col": Table_Summary_Col,
        "Table.Summary.Row": Table_Summary_Row,
        Tabs,
        TweenOne,
        "Typography.Paragraph": Typography_Paragraph,
        "Typography.Text": Typography_Text,
        "Typography.Title": Typography_Title,
    };
    const domains = {
        ...coreGenerateComponentsDomains(),
        Debug: domainDebug,
        Errors: domainErrors
    }
    if (register)
        Object.entries(components).forEach(([name, component]) => {
            registerComponent(name, component)
            if (registerDomains && name in domains) {
                registerComponentDomain(name, domains[name])
            }
        })
    return components
}

export default generateComponents();