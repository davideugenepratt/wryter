<template>
    <div
        class="modal fade"
        id="tourGuideModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div id="tourGuideCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#tourGuideCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#tourGuideCarousel" data-slide-to="1"></li>
                        <li data-target="#tourGuideCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img
                                class="intro-image"
                                src="/images/intro-slide-1.jpg"
                                alt="Welcome to Wryer. Write daily to become a better writer."
                            />
                        </div>
                        <div class="item">
                            <img
                                class="intro-image"
                                src="/images/intro-slide-2.jpg"
                                alt="Say goodbye to Wryters block. Just look at the photo and
                                     let your creativity flow."
                            />
                        </div>
                        <div class="item">
                            <img
                                class="intro-image"
                                src="/images/intro-slide-3.jpg"
                                alt="Keep track of your progress. Measure your
                                     effort with usefule stats."
                            />
                        </div>
                    </div>
                    <a
                        class="left carousel-control"
                        href="#tourGuideCarousel"
                        role="button"
                        data-slide="prev"
                    >
                        <div
                            class="fotorama__arr fotorama__arr--prev"
                            tabindex="0"
                            role="button"
                        ></div>
                    </a>
                    <a
                        class="right carousel-control"
                        href="#tourGuideCarousel"
                        role="button"
                        data-slide="next"
                    >
                        <div
                            class="fotorama__arr fotorama__arr--next"
                            tabindex="0"
                            role="button"
                        ></div>
                    </a>
                </div>
            </div>
            <div class="modal-footer"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';

const { $ } = window;

export default {
  name: 'TourGuide',
  mounted() {
    if (!Cookies.get('wryterTourGuide')) {
      $('#tourGuideModal').modal();
      $('.carousel').carousel();
      $('#tourGuideModal').modal('show');

      Cookies.set('wryterTourGuide', true);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .modal-header {
        border-bottom: none;
    }

    .modal-footer {
        border-top: none;
    }

    .intro-image {
        max-width: 100%;
        height: auto;
    }

    .fotorama__arr:focus {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;

        &:after {
            display: none;
        }
    }
</style>
