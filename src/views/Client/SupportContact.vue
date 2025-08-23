<script setup>
import { Mail, Phone, MapPin } from 'lucide-vue-next';
</script>

<template>
    <div class="contatosL contatosLs">
        <div class="publi">
            <h2>Suporte</h2>
            <p>
                Proteja, monitore e controle todas as suas licenças com uma solução
                segura e eficiente.
            </p>
        </div>
        <div class="contatoLso">
            <div class="contactItems">
                <ul>
                    <li>
                        <div class="iconImgLucide">
                            <Mail class="iconEM"></Mail>
                        </div>
                        <div class="iconContact">
                            <span>
                                Email
                            </span>
                            <span>
                                filipe@gmail.com
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="iconImgLucide">
                            <Phone class="iconEM"></Phone>
                        </div>
                        <div class="iconContact">
                            <span>
                                Telefone
                            </span>
                            <span>
                                (+258) 86 752 2595
                            </span>
                        </div>

                    </li>
                    <li>
                        <div class="iconImgLucide">
                            <MapPin class="iconEM"></MapPin>
                        </div>
                        <div class="iconContact">
                            <span>
                                Localização
                            </span>
                            <span>
                                Moçambique-Sofala-Beira-Matacuane
                            </span>
                        </div>

                    </li>

                </ul>
            </div>
            <form action="#" method="post">
                <div class="inputsL">
                    <input type="text" name="" id="">
                    <input type="email" name="" id="">
                </div>
                <textarea name="" id=""></textarea>
            </form>
        </div>

    </div>

</template>