import React from "react"
import { connect } from "react-redux"

function RehydrationCheckPost(props){
    const { _persist } = props;

    return _persist && _persist.rehydrated ? props.children : <div>Loading</div>;
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps,null)(RehydrationCheckPost)