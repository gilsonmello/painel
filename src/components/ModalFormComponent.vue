<template>
    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-lg">
            <form :action="action" :method="method" v-on:submit.prevent="submit()">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">×</span>
                        </button>
                        <slot name="header-form"></slot>
                    </div>
                    
                    <slot name="modal-body"></slot>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">
                            {{ buttons.dismiss.text}}
                        </button>
                        <button type="submit" class="btn btn-success">
                            {{ buttons.submit.text }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['action', 'method', 'buttons'],
        methods: {
            submit: function(){
                this.$emit('interface', this) // handle data and give it back to parent by interface
            },
        }
    }
</script>

<style lang="css">
</style>
