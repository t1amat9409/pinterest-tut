import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { $Page, $ActionBar, $Frame } from "react-nativescript";
import { $ScrollView, $GridLayout, $AbsoluteLayout } from "react-nativescript";
import { $StackLayout, $ListView } from "react-nativescript";
import { $Label } from "react-nativescript";
import { Frame, Page, Color } from 'tns-core-modules/ui/frame/frame'; //Step Two Import
import { ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout'; //Step Two Import
import IconSet from '.././font-icons';
import { screen } from 'tns-core-modules/platform'; //Step 3 Import

interface Props {
    forwardedRef: React.RefObject<Frame>,
}

interface State {

}

interface User {
    company: string
    username: string
    password: string
    role: string
    phone: string
    cell: string
};

const users: User[] = [
    {
        "company": "Anderson - West",
        "username": "Tyrel.Kirlin50",
        "password": "adIBwm6McwnBcWN",
        "role": "guest",
        "phone": "(230) 615-3650",
        "cell": "(972) 202-9559"
    },
    {
        "company": "Blick, Hansen and Jaskolski",
        "username": "Marisol_Nikolaus69",
        "password": "ZGtHxOy9j7pu7eW",
        "role": "administrator",
        "phone": "(499) 665-4212",
        "cell": "(214) 779-9165"
    },
    {
        "company": "Fadel Inc",
        "username": "Glenna.Swaniawski90",
        "password": "HdFj9RQks5s_q18",
        "role": "guest",
        "phone": "(884) 916-5800",
        "cell": "(214) 814-0757"
    },
    {
        "company": "Donnelly and Sons",
        "username": "Haylie.Murray",
        "password": "3Ztu0gqGVsUUfvm",
        "role": "user",
        "phone": "(520) 827-3885",
        "cell": "(469) 117-1313"
    },
    {
        "company": "Howe LLC",
        "username": "Melvina_Dach",
        "password": "1OTovsWlOoNtMBG",
        "role": "user",
        "phone": "(938) 486-6617",
        "cell": "(214) 306-6025"
    }
];

const normalRed = "#E33A38";
const nsRed = new Color(normalRed);
const searchMargin = 60

class AppContainer extends React.Component<Props, State> {
    render() {
        const { forwardedRef } = this.props;

        return (
            <$Frame ref={forwardedRef}>
                <$Page androidStatusBarBackground={nsRed} ref={this.pageRef} actionBarHidden={true}>
                    <$GridLayout background={'#eee'} rows={[
                        new ItemSpec(1, 'auto'), //Header
                        new ItemSpec(1, 'star'), //Body
                        new ItemSpec(40, 'pixel') //Bottom Red Strip
                    ]}>
                        <$GridLayout rows={[
                            new ItemSpec(1, 'star'), //Background
                            new ItemSpec(1, 'auto') //Search
                        ]} row={0}>
                            {this.renderHeaderContent()}
                            {this.renderSearchBox()}
                        </$GridLayout>
                        <$ScrollView row={1} background={"#eee"}>
                            <$StackLayout padding={`15 0`}>
                                {
                                    users.map((item, i) => {
                                        return (
                                            <$GridLayout onTap={(args:any) => {
                                                alert(`Hey, my username is ${item.username}!`)
                                            }} columns={[
                                                new ItemSpec(50, 'pixel'),
                                                new ItemSpec(1, 'star'),
                                                new ItemSpec(1, 'auto')
                                            ]} key={i} style={{
                                                height: 80,
                                                margin: `5 20`,
                                                padding: `0 15`,
                                                background: '#fff',
                                                borderRadius: 10
                                            }}>
                                                <$StackLayout col={0} style={{
                                                    height: 50,
                                                    width: 50,
                                                    borderRadius: 25,
                                                    background: normalRed
                                                }} />
                                                <$StackLayout verticalAlignment={'middle'} padding={`5 10`} col={1}>
                                                    <$Label fontSize={16} textWrap text={item.username} />
                                                    <$Label textWrap text={item.company} />
                                                </$StackLayout>
                                                <$Label col={2} verticalAlignment={'middle'} className={`Ionicons size20`} text={IconSet.Ionicons['ios-arrow-forward']} />
                                            </$GridLayout>
                                        )
                                    })
                                }
                            </$StackLayout>
                        </$ScrollView>
                        <$StackLayout row={2} background={normalRed} />
                    </$GridLayout>
                </$Page>
            </$Frame>
        );
    }

    renderHeaderContent = () => {
        return (
            <$GridLayout padding={`0 20`} rows={[
                new ItemSpec(1, 'star'), //Background
                new ItemSpec(30, 'pixel') // Padding to allow for the search input overlay
            ]} columns={[
                new ItemSpec(30, 'pixel'),
                new ItemSpec(1, 'star'),
                new ItemSpec(30, 'pixel')
            ]} row={0} background={normalRed} height={150}>
                <$Label row={0} color={new Color('white')} verticalAlignment={'middle'} textAlignment={'center'} col={0} text={IconSet.Ionicons['ios-arrow-back']} className={`Ionicons size30`} />
                <$Label col={1} verticalAlignment={'middle'} fontSize={20} textAlignment={'center'} row={0} color={new Color('#fff')} text={'Users'} />
                <$Label row={0} color={new Color('white')} verticalAlignment={'middle'} textAlignment={'center'} col={2} text={IconSet.Ionicons['ios-menu']} className={`Ionicons size30`} />
            </$GridLayout>
        )
    }

    renderSearchBox = () => {
        return (
            <$GridLayout marginTop={-25} row={1} background={`rgba(1,0,0,0)`} columns={[
                new ItemSpec(searchMargin, 'pixel'),
                new ItemSpec(1, 'star'),
                new ItemSpec(searchMargin, 'pixel')
            ]} height={50}>
                <$GridLayout columns={[
                    new ItemSpec(1, 'star'),
                    new ItemSpec(1, 'auto')
                ]} background={'white'} borderRadius={25} padding={`0 20`} col={1}>
                    <$Label col={0} className={'size16'} text={'SEARCH'} verticalAlignment={'middle'} />
                    <$Label className={'Ionicons size25'} verticalAlignment={'middle'} col={1} text={IconSet.Ionicons['md-search']} />
                </$GridLayout>
            </$GridLayout>
        )
    }

    private readonly pageRef: React.RefObject<Page> = React.createRef<Page>();

    componentDidMount() {
        const frame: Frame = this.props.forwardedRef.current!;
        console.log(`Running Home::Screen::Demo`);
        frame.navigate({
            create: () => {
                const page: Page = this.pageRef.current!;
                return page;
            }
        });
    }
}

export default hot(AppContainer);