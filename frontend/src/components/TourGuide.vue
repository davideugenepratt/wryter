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
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="https://via.placeholder.com/350" alt="First slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://via.placeholder.com/350" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://via.placeholder.com/350" alt="Third slide">
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#tourGuideCarousel"
                    role="button"
                    data-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#tourGuideCarousel"
                    role="button"
                    data-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Login or Register</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'TourGuide',
  mounted() {
    console.log('test342323');
    $('#tourGuideModal').modal();
    $('#tourGuideModal').modal('show');
    $('.carousel').carousel();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
