import React, { Component } from 'react';
import { connect } from 'react-redux';
import AmCharts from '@amcharts/amcharts3-react';

import AddTransactionButton from '../../components/AddTransactionButton';
import CashOnHand from '../../components/CashOnHand';
import Record from '../../components/Record';
import IncomeExpense from '../../components/IncomeExpense';
import styleEnhancer from '../../util/styleEnhancer';
import styles from './style';

class Dashboard extends Component {
    componentDidMount() {
        // modify chart watermark

        const watermark = document.querySelector(
            'a[title="JavaScript charts"]'
        );

        for (const attribute in styles.watermark) {
            watermark.style[attribute] = styles.watermark[attribute];
        }
    }

    componentDidUpdate() {
        // modify chart watermark

        const watermark = document.querySelector(
            'a[title="JavaScript charts"]'
        );

        for (const attribute in styles.watermark) {
            watermark.style[attribute] = styles.watermark[attribute];
        }
    }

    render() {
        const { size } = this.props.browser;
        const enhancedStyle = styleEnhancer(size);

        return (
            <div style={styles.componentContainer}>
                <AddTransactionButton />

                <div style={enhancedStyle(styles.topInfoContainer)}>
                    <CashOnHand size={size} />
                    <IncomeExpense size={size} />
                </div>

                <AmCharts.React
                    style={enhancedStyle(styles.chart)}
                    options={{
                        type: 'serial',
                        theme: 'dark',
                        addClassNames: true,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 45,
                        marginBottom: 0,
                        autoMarginOffset: 15,
                        startDuration: 0,
                        sequencedAnimation: false,
                        dataProvider: [
                            {
                                month: '12/27',
                                value1: 3800
                            },
                            {
                                month: '12/28',
                                value1: 3600
                            },
                            {
                                month: '12/29',
                                value1: 4000
                            },
                            {
                                month: '12/30',
                                value1: 4600
                            },
                            {
                                month: '12/31',
                                value1: 3900
                            },
                            {
                                month: '1/1',
                                value1: 3600
                            },
                            {
                                month: '1/2',
                                value1: 3201
                            }
                        ],
                        graphs: [
                            {
                                id: 'g1',
                                lineAlpha: 1,
                                lineThickness: 2,
                                valueField: 'value1',
                                balloonColor: '#5fb3f3',
                                balloonText: '[[value1]]',
                                balloon: {
                                    drop: true,
                                    adjustBorderColor: false,
                                    color: '#ffffff'
                                }
                            }
                        ],
                        categoryField: 'month',
                        categoryAxis: {
                            color: '#8a86c7',
                            axisColor: '#5957b1',
                            gridAlpha: 0,
                            startOnAxis: false,
                            balloon: {
                                fillAlpha: 1,
                                fontSize: 15,
                                horizontalPadding: 10
                            }
                        },
                        valueAxes: [
                            {
                                stackType: 'regular',
                                gridAlpha: 0,
                                axisAlpha: 0,
                                minimum: 3201, // arbitrary??
                                maximum: 4600, // arbitrary??
                                labelsEnabled: false,
                                ignoreAxisWidth: true
                            }
                        ],
                        balloon: {
                            borderThickness: 0,
                            shadowAlpha: 0
                        },
                        chartCursor: {
                            cursorAlpha: 0.7,
                            cursorColor: '#5fb3f3',
                            limitToGraph: 'g1',
                            categoryBalloonColor: '#5e59b9',
                            categoryBalloonAlpha: 1,
                            zoomable: false
                        }
                    }}
                />

                <Record size={size} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        browser: state.browser
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
