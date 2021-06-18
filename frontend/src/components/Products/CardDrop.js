
import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render DropDownButton.
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.items = [
            {
                text: 'New tab'
            },
            {
                text: 'New window'
            },
            {
                text: 'New incognito window'
            },
            {
                separator: true
            },
            {
                text: 'Print'
            },
            {
                text: 'Cast'
            },
            {
                text: 'Find'
            }
        ];
    }
    render() {
        return (<div>
        <DropDownButtonComponent items={this.items} iconCss='e-icons e-menu' cssClass='e-caret-hide'></DropDownButtonComponent>
      </div>);
    }
}
ReactDom.render(<App />, document.getElementById('button'));
