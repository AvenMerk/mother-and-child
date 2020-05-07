<template>
    <div class="observer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['margin', 'timer_value'],
        data() {
            return {
                observer: null,
                options: {
                    rootMargin: this.margin ? this.margin + "px" : "100px",
                }
            }
        },
        mounted() {
            let timer = setTimeout(() => {
                this.$emit("display", this.$el);
                this.killObserver(timer);
            }, this.timer_value ? this.timer_value : 10000);

            if ('IntersectionObserver' in window) {
                const options = this.options || {};
                this.observer = new IntersectionObserver(([entry]) => {
                    if (entry && entry.isIntersecting) {
                        this.$emit("display", this.$el);
                        this.killObserver(timer);
                    }
                }, options);

                this.observer.observe(this.$el);
            }
        },
        methods: {
            killObserver(timer) {
                clearTimeout(timer);
                if (this.observer) {
                    this.observer.unobserve(this.$el);
                    this.observer = null;
                }

            }
        }
    }
</script>

<style>

</style>