import React, { Component, Fragment } from "react";
import Cabecalho from "../../components/Cabecalho";
import Dashboard from "../../components/Dashboard";
import Widget from "../../components/Widget";
import TrendsArea from "../../components/TrendsArea";
import Tweet from "../../components/Tweet";
import NavMenu from "../../components/NavMenu";
import { Modal } from "../../components/Modal";
import { TweetsService } from "../../services/TweetsService";
import { ReactReduxContext } from "react-redux";
import { TweetsThunkActions } from "../../store/ducks/tweets";
import { TweetsContainer } from "../../containers/TweetsContainer";
import { Helmet } from "react-helmet";

class App extends Component {
  constructor() {
    super();
    this.state = {
      novoTweet: "",
      totalTweets: 0,
      tweets: [],
      tweetAtivoNoModal: {},
    };
  }

  static contextType = ReactReduxContext;

  static contextType = ReactReduxContext;
  componentDidMount() {
    const store = this.context.store;
    store.subscribe(() => {
      this.setState({
        totalTweets: store.getState().tweets.data.length,
      });
    });
  }

  adicionaTweet = (infosDoEvento) => {
    infosDoEvento.preventDefault();
    if (this.state.novoTweet.length > 0) {
      const conteudoDoTweet = this.state.novoTweet;
      this.context.store
        .dispatch(TweetsThunkActions.addTweet(conteudoDoTweet))
        .then(() => {
          this.setState({ novoTweet: "" });
        });
    }
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Helmet>
          <title>Twitelum - ({`${this.state.totalTweets}`})</title>
        </Helmet>
        <Cabecalho>
          <NavMenu usuario="@Omariosouto" />
        </Cabecalho>

        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet" onSubmit={this.adicionaTweet}>
                <div className="novoTweet__editorArea">
                  <span
                    className={`novoTweet__status ${
                      this.state.novoTweet.length > 140
                        ? "novoTweet__status--invalido"
                        : ""
                    }`}
                  >
                    {this.state.novoTweet.length}/140
                  </span>
                  <textarea
                    className="novoTweet__editor"
                    value={this.state.novoTweet}
                    onChange={(event) =>
                      this.setState({ novoTweet: event.target.value })
                    }
                    placeholder="O que está acontecendo?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="novoTweet__envia"
                  disabled={
                    this.state.novoTweet.length > 140 ||
                    this.state.novoTweet.length === 0
                  }
                  type="submit"
                >
                  Tweetar
                </button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <TweetsContainer />
            </Widget>
          </Dashboard>
        </div>
      </Fragment>
    );
  }
}
export default App;
