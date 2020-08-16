import React from "react";
import * as actions from "modules/game/actions"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GameComponent from "modules/game/components/GameComponent";

const GameContainer = props => <GameComponent {...props} />

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);