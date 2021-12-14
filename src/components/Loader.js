import { StackedLineChartOutlined } from '@mui/icons-material'
import { Skeleton } from '@mui/material'
import React from 'react'

const Loader = () => {
    return <>
        <Skeleton />
        <StackedLineChartOutlined animation="wave" />
        <Skeleton animation={false} />
    </>
}
export default Loader