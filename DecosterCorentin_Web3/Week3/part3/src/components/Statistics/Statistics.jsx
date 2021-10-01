import React, { useState } from "react";

const Statistics = ({clicks}) => {

    const good = clicks.good
    const neutral = clicks.neutral
    const bad = clicks.bad
    const all = good+neutral+bad
    const average = (good-bad)/all
    const positive = (good/all)*100

    if(all === 0 ){
        return <p> No feedback given </p>
    }

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <tr>
                        <td> Good </td>
                        <td> {good} </td>
                    </tr>
                    <tr>
                        <td> Neutral </td>
                        <td> {neutral} </td>
                    </tr>
                    <tr>
                        <td> Bad </td>
                        <td> {bad} </td>
                    </tr>
                    <tr>
                        <td> All </td>
                        <td> {all} </td>
                    </tr>
                    <tr>
                        <td> Average </td>
                        <td> {average} </td>
                    </tr>
                    <tr>
                        <td> Positive </td>
                        <td> {positive} </td>
                    </tr>
                     
                </tbody>
            </table>
        </div>      
    )
}

export default Statistics