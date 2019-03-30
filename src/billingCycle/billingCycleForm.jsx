import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import { init } from './billingCycleActions';
import LabelAndInput from '../common/form/labelAndInput';
import labelAndSelect from '../common/form/labelAndSelect';
import ItemList from './itemList';
import Summary from './summary';

class BillingCycleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            months: [
                { value: "1", text: "Janeiro" },
                { value: "2", text: "Fevereiro" },
                { value: "3", text: "Março" },
                { value: "4", text: "Abril" },
                { value: "5", text: "Maio" },
                { value: "6", text: "Junho" },
                { value: "7", text: "Julho" },
                { value: "8", text: "Agosto" },
                { value: "9", text: "Setembro" },
                { value: "10", text: "Outubro" },
                { value: "11", text: "Novembro" },
                { value: "12", text: "Dezembro" },
            ],
        }
    }

    calculateSummary(){
        const sum = (t, v) => t + v;
        return {
            sumOfCredits: this.props.credits.map( c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const {
            handleSubmit,
            readOnly,
            credits,
            debts,
            month,
            submitLabel,
            submitClass,
            init
        } = this.props;

        const { months } = this.state;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();

        return (
            <form onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name='month'
                        label="Mês"
                        cols='12 4'
                        placeholder='Informe o mês'
                        component={labelAndSelect}
                        readOnly={readOnly}
                        options={months}
                        defaultValue={month}
                    />
                    <Field
                        name='year'
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'
                        component={LabelAndInput}
                        readOnly={readOnly}
                    />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' list={credits} field='credits' legend='Créditos' readOnly={readOnly} />
                    <ItemList cols='12 6' list={debts} field='debts' legend='Débitos' showStatus readOnly={readOnly} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${submitClass}`}>
                        {submitLabel}
                    </button>
                    <button
                        type='button'
                        className='btn btn-default'
                        onClick={init}> Cancelar
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);

const selector = formValueSelector('billingCycleForm');
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts'),
    month: state.form.billingCycleForm.values.month,
})

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
