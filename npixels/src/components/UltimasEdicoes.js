import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
}
from 'reactstrap';


const items = [{
    src: './img/kabum01.jpg',
    altText: 'Mundial de LoL 2018',
    caption: 'KaBuM! perde para DFM no desempate e é eliminada',
    header: 'Mundial de LoL 2018'
  },
  {
    src: './img/overwatch01.jpg',
    altText: 'Slide 2',
    caption: 'BlizzCon acontece nos dias 2 e 3 de novembro; oito times decidirão o campeão da OWC 2018',
    header: 'Blizzard revela calendário final da Overwatch World Cup na BlizzCon 2018'
  },
  {
    src: './img/youtubePremim.jpg',
    altText: 'YouTube Premium: como criar uma assinatura e testar grátis',
    caption: 'Teste a versão paga do serviço gratuitamente durante três meses',
    header: 'YouTube Premium: como criar uma assinatura e testar grátis'
  }
];

class UltimasEdicoes extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex} = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          onClickHandler={this.goToIndex}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default UltimasEdicoes;