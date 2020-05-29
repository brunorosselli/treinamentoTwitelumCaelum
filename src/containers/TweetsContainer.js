/*Componente que lida com a	parte de carregar e	manipular o	state do mesmo */

//Imports necessários para funcionar
import React, { Component, Fragment } from "react";
import { TweetsThunkActions } from "../store/ducks/tweets";
import Tweet from "../components/Tweet";
import { Modal } from "../components/Modal";
import { ReactReduxContext } from "react-redux";

//Exporta o componente TweetContainer
export class TweetsContainer extends Component {
  state = {
    tweets: [],
    tweetAtivoNoModal: {},
  };

  static contextType = ReactReduxContext;

  likeHandler = (idDoTweet) => {
    this.context.store.dispatch(TweetsThunkActions.like(idDoTweet));
  };

  componentDidMount() {
    const store = this.context.store;
    store.subscribe(() => {
      this.setState({
        tweets: store.getState().tweets.data,
        tweetAtivoNoModal: store.getState().tweets.activeDataItem,
      });
    });

    store.dispatch(TweetsThunkActions.carregaTweets());
  }
  //Metodo que remove o Tweet
  removeTweet(idTweetQueVaiSerRemovido) {
    this.context.store
      .dispatch(TweetsThunkActions.remove(idTweetQueVaiSerRemovido))
      .then(() => {
        this.fechaModal();
      });
  }

  //Metodo para fechar o modal
  fechaModal = () => {
    const store = this.context.store;
    store.dispatch(TweetsThunkActions.unsetTweetAtivo());
  };

  //Metodo para abrir o modal
  abreModal = (idDoTweetQueVaiProModal) => {
    console.log("ID AQUI -->", idDoTweetQueVaiProModal);
    const store = this.context.store;
    store.dispatch(TweetsThunkActions.setTweetAtivo(idDoTweetQueVaiProModal));
  };

  render() {
    return (
      <Fragment>
        <div className="tweetsArea">
          {this.state.tweets.map((tweetInfo, index) => {
            return (
              <Tweet
                key={tweetInfo._id}
                id={tweetInfo._id}
                texto={tweetInfo.conteudo}
                usuario={tweetInfo.usuario}
                likeado={tweetInfo.likeado}
                totalLikes={tweetInfo.totalLikes}
                removivel={tweetInfo.removivel}
                onClickNaAreaDeConteudo={() => this.abreModal(tweetInfo._id)}
                removeHandler={() => this.removeTweet(tweetInfo._id)}
                likeHandler={() => this.likeHandler(tweetInfo._id)}
              ></Tweet>
            );
          })}
        </div>
        <Modal
          isAberto={Boolean(this.state.tweetAtivoNoModal._id)}
          onFechando={this.fechaModal}
        >
          {() => (
            <Tweet
              id={this.state.tweetAtivoNoModal._id}
              usuario={this.state.tweetAtivoNoModal.usuario}
              texto={this.state.tweetAtivoNoModal.conteudo}
              totalLikes={this.state.tweetAtivoNoModal.totalLikes}
              removivel={this.state.tweetAtivoNoModal.removivel}
              removeHandler={() =>
                this.removeTweet(this.state.tweetAtivoNoModal._id)
              }
              likeado={this.state.tweetAtivoNoModal.likeado}
              likeHandler={() =>
                this.likeHandler(this.state.tweetAtivoNoModal._id)
              }
            />
          )}
        </Modal>
      </Fragment>
    );
  }
}
