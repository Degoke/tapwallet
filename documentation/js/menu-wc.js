'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tapmoney documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AbilityModule.html" data-type="entity-link" >AbilityModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AbilityModule-32725b0307fe7e3aa19b4ab77393ccd12acfd31eb332fad8a509ef5c539a5e0391f16becb386548e68f3b6fb81133f61c231b9dc5b721c852521e8de190357ee"' : 'data-target="#xs-injectables-links-module-AbilityModule-32725b0307fe7e3aa19b4ab77393ccd12acfd31eb332fad8a509ef5c539a5e0391f16becb386548e68f3b6fb81133f61c231b9dc5b721c852521e8de190357ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AbilityModule-32725b0307fe7e3aa19b4ab77393ccd12acfd31eb332fad8a509ef5c539a5e0391f16becb386548e68f3b6fb81133f61c231b9dc5b721c852521e8de190357ee"' :
                                        'id="xs-injectables-links-module-AbilityModule-32725b0307fe7e3aa19b4ab77393ccd12acfd31eb332fad8a509ef5c539a5e0391f16becb386548e68f3b6fb81133f61c231b9dc5b721c852521e8de190357ee"' }>
                                        <li class="link">
                                            <a href="injectables/AbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AbilityFactory</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountModule-1a01383f9ff21b6d4e618a49e723f419ca3a846ed40039ad57d6660666aa6c2c6035ff4a831ba38046e71bb54b82a4de3636b69ce86c5ede46561fabc495b4e9"' : 'data-target="#xs-controllers-links-module-AccountModule-1a01383f9ff21b6d4e618a49e723f419ca3a846ed40039ad57d6660666aa6c2c6035ff4a831ba38046e71bb54b82a4de3636b69ce86c5ede46561fabc495b4e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountModule-1a01383f9ff21b6d4e618a49e723f419ca3a846ed40039ad57d6660666aa6c2c6035ff4a831ba38046e71bb54b82a4de3636b69ce86c5ede46561fabc495b4e9"' :
                                            'id="xs-controllers-links-module-AccountModule-1a01383f9ff21b6d4e618a49e723f419ca3a846ed40039ad57d6660666aa6c2c6035ff4a831ba38046e71bb54b82a4de3636b69ce86c5ede46561fabc495b4e9"' }>
                                            <li class="link">
                                                <a href="controllers/AccountController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountModule-1a01383f9ff21b6d4e618a49e723f419ca3a846ed40039ad57d6660666aa6c2c6035ff4a831ba38046e71bb54b82a4de3636b69ce86c5ede46561fabc495b4e9"' : 'data-target="#xs-injectables-links-module-AccountModule-1a01383f9ff21b6d4e618a49e723f419ca3a846ed40039ad57d6660666aa6c2c6035ff4a831ba38046e71bb54b82a4de3636b69ce86c5ede46561fabc495b4e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountModule-1a01383f9ff21b6d4e618a49e723f419ca3a846ed40039ad57d6660666aa6c2c6035ff4a831ba38046e71bb54b82a4de3636b69ce86c5ede46561fabc495b4e9"' :
                                        'id="xs-injectables-links-module-AccountModule-1a01383f9ff21b6d4e618a49e723f419ca3a846ed40039ad57d6660666aa6c2c6035ff4a831ba38046e71bb54b82a4de3636b69ce86c5ede46561fabc495b4e9"' }>
                                        <li class="link">
                                            <a href="injectables/AccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActivitiesModule.html" data-type="entity-link" >ActivitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ActivitiesModule-de358194955429998b03079f5c74e50686139806dde7c02a98479828dd8f59b86f3aff10d5f3f28d722da65d06c88a02158ce061287fe10c14274d2148b46d10"' : 'data-target="#xs-controllers-links-module-ActivitiesModule-de358194955429998b03079f5c74e50686139806dde7c02a98479828dd8f59b86f3aff10d5f3f28d722da65d06c88a02158ce061287fe10c14274d2148b46d10"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ActivitiesModule-de358194955429998b03079f5c74e50686139806dde7c02a98479828dd8f59b86f3aff10d5f3f28d722da65d06c88a02158ce061287fe10c14274d2148b46d10"' :
                                            'id="xs-controllers-links-module-ActivitiesModule-de358194955429998b03079f5c74e50686139806dde7c02a98479828dd8f59b86f3aff10d5f3f28d722da65d06c88a02158ce061287fe10c14274d2148b46d10"' }>
                                            <li class="link">
                                                <a href="controllers/ActivitiesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ActivitiesModule-de358194955429998b03079f5c74e50686139806dde7c02a98479828dd8f59b86f3aff10d5f3f28d722da65d06c88a02158ce061287fe10c14274d2148b46d10"' : 'data-target="#xs-injectables-links-module-ActivitiesModule-de358194955429998b03079f5c74e50686139806dde7c02a98479828dd8f59b86f3aff10d5f3f28d722da65d06c88a02158ce061287fe10c14274d2148b46d10"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ActivitiesModule-de358194955429998b03079f5c74e50686139806dde7c02a98479828dd8f59b86f3aff10d5f3f28d722da65d06c88a02158ce061287fe10c14274d2148b46d10"' :
                                        'id="xs-injectables-links-module-ActivitiesModule-de358194955429998b03079f5c74e50686139806dde7c02a98479828dd8f59b86f3aff10d5f3f28d722da65d06c88a02158ce061287fe10c14274d2148b46d10"' }>
                                        <li class="link">
                                            <a href="injectables/ActivitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AdminModule-ab16a04a19969f60a45b05e25f4ed7730e1a0f19b9aab031e15b7217e12fb7de7add30e22f5ec395ab07622f04c2ce0be7b1e888d72e67fd90348e6850d191ff"' : 'data-target="#xs-controllers-links-module-AdminModule-ab16a04a19969f60a45b05e25f4ed7730e1a0f19b9aab031e15b7217e12fb7de7add30e22f5ec395ab07622f04c2ce0be7b1e888d72e67fd90348e6850d191ff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-ab16a04a19969f60a45b05e25f4ed7730e1a0f19b9aab031e15b7217e12fb7de7add30e22f5ec395ab07622f04c2ce0be7b1e888d72e67fd90348e6850d191ff"' :
                                            'id="xs-controllers-links-module-AdminModule-ab16a04a19969f60a45b05e25f4ed7730e1a0f19b9aab031e15b7217e12fb7de7add30e22f5ec395ab07622f04c2ce0be7b1e888d72e67fd90348e6850d191ff"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-ab16a04a19969f60a45b05e25f4ed7730e1a0f19b9aab031e15b7217e12fb7de7add30e22f5ec395ab07622f04c2ce0be7b1e888d72e67fd90348e6850d191ff"' : 'data-target="#xs-injectables-links-module-AdminModule-ab16a04a19969f60a45b05e25f4ed7730e1a0f19b9aab031e15b7217e12fb7de7add30e22f5ec395ab07622f04c2ce0be7b1e888d72e67fd90348e6850d191ff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-ab16a04a19969f60a45b05e25f4ed7730e1a0f19b9aab031e15b7217e12fb7de7add30e22f5ec395ab07622f04c2ce0be7b1e888d72e67fd90348e6850d191ff"' :
                                        'id="xs-injectables-links-module-AdminModule-ab16a04a19969f60a45b05e25f4ed7730e1a0f19b9aab031e15b7217e12fb7de7add30e22f5ec395ab07622f04c2ce0be7b1e888d72e67fd90348e6850d191ff"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AnnouncementModule.html" data-type="entity-link" >AnnouncementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AnnouncementModule-60dcc9eccd8ec24846494e16701c1ccb9bca46b01f86c708c79725278c39a2685a2ee3350e5c714278ad5c7fee544cbb5b923acd9d8a66d253c875197b88d2d8"' : 'data-target="#xs-controllers-links-module-AnnouncementModule-60dcc9eccd8ec24846494e16701c1ccb9bca46b01f86c708c79725278c39a2685a2ee3350e5c714278ad5c7fee544cbb5b923acd9d8a66d253c875197b88d2d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AnnouncementModule-60dcc9eccd8ec24846494e16701c1ccb9bca46b01f86c708c79725278c39a2685a2ee3350e5c714278ad5c7fee544cbb5b923acd9d8a66d253c875197b88d2d8"' :
                                            'id="xs-controllers-links-module-AnnouncementModule-60dcc9eccd8ec24846494e16701c1ccb9bca46b01f86c708c79725278c39a2685a2ee3350e5c714278ad5c7fee544cbb5b923acd9d8a66d253c875197b88d2d8"' }>
                                            <li class="link">
                                                <a href="controllers/AnnouncementController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnnouncementController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AnnouncementModule-60dcc9eccd8ec24846494e16701c1ccb9bca46b01f86c708c79725278c39a2685a2ee3350e5c714278ad5c7fee544cbb5b923acd9d8a66d253c875197b88d2d8"' : 'data-target="#xs-injectables-links-module-AnnouncementModule-60dcc9eccd8ec24846494e16701c1ccb9bca46b01f86c708c79725278c39a2685a2ee3350e5c714278ad5c7fee544cbb5b923acd9d8a66d253c875197b88d2d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AnnouncementModule-60dcc9eccd8ec24846494e16701c1ccb9bca46b01f86c708c79725278c39a2685a2ee3350e5c714278ad5c7fee544cbb5b923acd9d8a66d253c875197b88d2d8"' :
                                        'id="xs-injectables-links-module-AnnouncementModule-60dcc9eccd8ec24846494e16701c1ccb9bca46b01f86c708c79725278c39a2685a2ee3350e5c714278ad5c7fee544cbb5b923acd9d8a66d253c875197b88d2d8"' }>
                                        <li class="link">
                                            <a href="injectables/AnnouncementService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnnouncementService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-de0e7ff52a4c854541153deb2ef617d2438f7f35aaeef9a9d848cfeb258e50b766a9f98b00853152147f86b4f002a55d1ac51b5c4c79679ed823dd5fdb12908d"' : 'data-target="#xs-controllers-links-module-AuthModule-de0e7ff52a4c854541153deb2ef617d2438f7f35aaeef9a9d848cfeb258e50b766a9f98b00853152147f86b4f002a55d1ac51b5c4c79679ed823dd5fdb12908d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-de0e7ff52a4c854541153deb2ef617d2438f7f35aaeef9a9d848cfeb258e50b766a9f98b00853152147f86b4f002a55d1ac51b5c4c79679ed823dd5fdb12908d"' :
                                            'id="xs-controllers-links-module-AuthModule-de0e7ff52a4c854541153deb2ef617d2438f7f35aaeef9a9d848cfeb258e50b766a9f98b00853152147f86b4f002a55d1ac51b5c4c79679ed823dd5fdb12908d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-de0e7ff52a4c854541153deb2ef617d2438f7f35aaeef9a9d848cfeb258e50b766a9f98b00853152147f86b4f002a55d1ac51b5c4c79679ed823dd5fdb12908d"' : 'data-target="#xs-injectables-links-module-AuthModule-de0e7ff52a4c854541153deb2ef617d2438f7f35aaeef9a9d848cfeb258e50b766a9f98b00853152147f86b4f002a55d1ac51b5c4c79679ed823dd5fdb12908d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-de0e7ff52a4c854541153deb2ef617d2438f7f35aaeef9a9d848cfeb258e50b766a9f98b00853152147f86b4f002a55d1ac51b5c4c79679ed823dd5fdb12908d"' :
                                        'id="xs-injectables-links-module-AuthModule-de0e7ff52a4c854541153deb2ef617d2438f7f35aaeef9a9d848cfeb258e50b766a9f98b00853152147f86b4f002a55d1ac51b5c4c79679ed823dd5fdb12908d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BankModule.html" data-type="entity-link" >BankModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BankModule-13a41d277a37e74d2c49978deb591f6e738df6dfdf6e05d57b67fb9576ebd497dc43f291ea6f2f1dfb6ad1e698ecc5a58e77492bc4a8c151ca69a81d240a8d9f"' : 'data-target="#xs-controllers-links-module-BankModule-13a41d277a37e74d2c49978deb591f6e738df6dfdf6e05d57b67fb9576ebd497dc43f291ea6f2f1dfb6ad1e698ecc5a58e77492bc4a8c151ca69a81d240a8d9f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BankModule-13a41d277a37e74d2c49978deb591f6e738df6dfdf6e05d57b67fb9576ebd497dc43f291ea6f2f1dfb6ad1e698ecc5a58e77492bc4a8c151ca69a81d240a8d9f"' :
                                            'id="xs-controllers-links-module-BankModule-13a41d277a37e74d2c49978deb591f6e738df6dfdf6e05d57b67fb9576ebd497dc43f291ea6f2f1dfb6ad1e698ecc5a58e77492bc4a8c151ca69a81d240a8d9f"' }>
                                            <li class="link">
                                                <a href="controllers/BankController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BankModule-13a41d277a37e74d2c49978deb591f6e738df6dfdf6e05d57b67fb9576ebd497dc43f291ea6f2f1dfb6ad1e698ecc5a58e77492bc4a8c151ca69a81d240a8d9f"' : 'data-target="#xs-injectables-links-module-BankModule-13a41d277a37e74d2c49978deb591f6e738df6dfdf6e05d57b67fb9576ebd497dc43f291ea6f2f1dfb6ad1e698ecc5a58e77492bc4a8c151ca69a81d240a8d9f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BankModule-13a41d277a37e74d2c49978deb591f6e738df6dfdf6e05d57b67fb9576ebd497dc43f291ea6f2f1dfb6ad1e698ecc5a58e77492bc4a8c151ca69a81d240a8d9f"' :
                                        'id="xs-injectables-links-module-BankModule-13a41d277a37e74d2c49978deb591f6e738df6dfdf6e05d57b67fb9576ebd497dc43f291ea6f2f1dfb6ad1e698ecc5a58e77492bc4a8c151ca69a81d240a8d9f"' }>
                                        <li class="link">
                                            <a href="injectables/BankService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmailModule.html" data-type="entity-link" >EmailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EmailModule-5931bc2b5fb6420402d2618816791317b206ca2326e3662caa530aae0f9d3a95f9a681de9aa749e95751e912215215438d3e492677d46d4e58221fbaf4656f4a"' : 'data-target="#xs-controllers-links-module-EmailModule-5931bc2b5fb6420402d2618816791317b206ca2326e3662caa530aae0f9d3a95f9a681de9aa749e95751e912215215438d3e492677d46d4e58221fbaf4656f4a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmailModule-5931bc2b5fb6420402d2618816791317b206ca2326e3662caa530aae0f9d3a95f9a681de9aa749e95751e912215215438d3e492677d46d4e58221fbaf4656f4a"' :
                                            'id="xs-controllers-links-module-EmailModule-5931bc2b5fb6420402d2618816791317b206ca2326e3662caa530aae0f9d3a95f9a681de9aa749e95751e912215215438d3e492677d46d4e58221fbaf4656f4a"' }>
                                            <li class="link">
                                                <a href="controllers/EmailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmailModule-5931bc2b5fb6420402d2618816791317b206ca2326e3662caa530aae0f9d3a95f9a681de9aa749e95751e912215215438d3e492677d46d4e58221fbaf4656f4a"' : 'data-target="#xs-injectables-links-module-EmailModule-5931bc2b5fb6420402d2618816791317b206ca2326e3662caa530aae0f9d3a95f9a681de9aa749e95751e912215215438d3e492677d46d4e58221fbaf4656f4a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailModule-5931bc2b5fb6420402d2618816791317b206ca2326e3662caa530aae0f9d3a95f9a681de9aa749e95751e912215215438d3e492677d46d4e58221fbaf4656f4a"' :
                                        'id="xs-injectables-links-module-EmailModule-5931bc2b5fb6420402d2618816791317b206ca2326e3662caa530aae0f9d3a95f9a681de9aa749e95751e912215215438d3e492677d46d4e58221fbaf4656f4a"' }>
                                        <li class="link">
                                            <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FlutterwaveModule.html" data-type="entity-link" >FlutterwaveModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FlutterwaveModule-8e4a3f1710c17adc2b65bf3cbee210d362df018a58ace9417fcd5594bdc0cc325a5758a0d29dd1869d67b9b37478b63ae7a80717ac513ec0b3781c29ecf4a07e"' : 'data-target="#xs-controllers-links-module-FlutterwaveModule-8e4a3f1710c17adc2b65bf3cbee210d362df018a58ace9417fcd5594bdc0cc325a5758a0d29dd1869d67b9b37478b63ae7a80717ac513ec0b3781c29ecf4a07e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FlutterwaveModule-8e4a3f1710c17adc2b65bf3cbee210d362df018a58ace9417fcd5594bdc0cc325a5758a0d29dd1869d67b9b37478b63ae7a80717ac513ec0b3781c29ecf4a07e"' :
                                            'id="xs-controllers-links-module-FlutterwaveModule-8e4a3f1710c17adc2b65bf3cbee210d362df018a58ace9417fcd5594bdc0cc325a5758a0d29dd1869d67b9b37478b63ae7a80717ac513ec0b3781c29ecf4a07e"' }>
                                            <li class="link">
                                                <a href="controllers/FlutterwaveController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FlutterwaveController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FlutterwaveModule-8e4a3f1710c17adc2b65bf3cbee210d362df018a58ace9417fcd5594bdc0cc325a5758a0d29dd1869d67b9b37478b63ae7a80717ac513ec0b3781c29ecf4a07e"' : 'data-target="#xs-injectables-links-module-FlutterwaveModule-8e4a3f1710c17adc2b65bf3cbee210d362df018a58ace9417fcd5594bdc0cc325a5758a0d29dd1869d67b9b37478b63ae7a80717ac513ec0b3781c29ecf4a07e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FlutterwaveModule-8e4a3f1710c17adc2b65bf3cbee210d362df018a58ace9417fcd5594bdc0cc325a5758a0d29dd1869d67b9b37478b63ae7a80717ac513ec0b3781c29ecf4a07e"' :
                                        'id="xs-injectables-links-module-FlutterwaveModule-8e4a3f1710c17adc2b65bf3cbee210d362df018a58ace9417fcd5594bdc0cc325a5758a0d29dd1869d67b9b37478b63ae7a80717ac513ec0b3781c29ecf4a07e"' }>
                                        <li class="link">
                                            <a href="injectables/FlutterwaveService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FlutterwaveService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-59c76511db175f08689a0b28c797b2ad229ca9f6bcad86ab458607efe98e0a1f00595d88d15961c4a702affff927a499f1ac2642c2fc7af5586c376cf62e821c"' : 'data-target="#xs-controllers-links-module-HealthModule-59c76511db175f08689a0b28c797b2ad229ca9f6bcad86ab458607efe98e0a1f00595d88d15961c4a702affff927a499f1ac2642c2fc7af5586c376cf62e821c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-59c76511db175f08689a0b28c797b2ad229ca9f6bcad86ab458607efe98e0a1f00595d88d15961c4a702affff927a499f1ac2642c2fc7af5586c376cf62e821c"' :
                                            'id="xs-controllers-links-module-HealthModule-59c76511db175f08689a0b28c797b2ad229ca9f6bcad86ab458607efe98e0a1f00595d88d15961c4a702affff927a499f1ac2642c2fc7af5586c376cf62e821c"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogModule.html" data-type="entity-link" >LogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LogModule-84666a2d4d984818343a0c48dd5fe52b996355c477afea763d1a24abf7cb85b1e96da2f681004b764c081494653373f3bffe51e0c9587e639130ece12f4f2988"' : 'data-target="#xs-controllers-links-module-LogModule-84666a2d4d984818343a0c48dd5fe52b996355c477afea763d1a24abf7cb85b1e96da2f681004b764c081494653373f3bffe51e0c9587e639130ece12f4f2988"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LogModule-84666a2d4d984818343a0c48dd5fe52b996355c477afea763d1a24abf7cb85b1e96da2f681004b764c081494653373f3bffe51e0c9587e639130ece12f4f2988"' :
                                            'id="xs-controllers-links-module-LogModule-84666a2d4d984818343a0c48dd5fe52b996355c477afea763d1a24abf7cb85b1e96da2f681004b764c081494653373f3bffe51e0c9587e639130ece12f4f2988"' }>
                                            <li class="link">
                                                <a href="controllers/LogController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LogModule-84666a2d4d984818343a0c48dd5fe52b996355c477afea763d1a24abf7cb85b1e96da2f681004b764c081494653373f3bffe51e0c9587e639130ece12f4f2988"' : 'data-target="#xs-injectables-links-module-LogModule-84666a2d4d984818343a0c48dd5fe52b996355c477afea763d1a24abf7cb85b1e96da2f681004b764c081494653373f3bffe51e0c9587e639130ece12f4f2988"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LogModule-84666a2d4d984818343a0c48dd5fe52b996355c477afea763d1a24abf7cb85b1e96da2f681004b764c081494653373f3bffe51e0c9587e639130ece12f4f2988"' :
                                        'id="xs-injectables-links-module-LogModule-84666a2d4d984818343a0c48dd5fe52b996355c477afea763d1a24abf7cb85b1e96da2f681004b764c081494653373f3bffe51e0c9587e639130ece12f4f2988"' }>
                                        <li class="link">
                                            <a href="injectables/CustomLogger.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomLogger</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MerchantApiModule.html" data-type="entity-link" >MerchantApiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MerchantApiModule-ca4701add9a2ebacec0f76ae1730bbef14cac31dd00ab41baa2fb23262c4b1253c1b7bb787a746f439b48e51ec5ffce04f11cf69e467a27caef348bebc38d449"' : 'data-target="#xs-controllers-links-module-MerchantApiModule-ca4701add9a2ebacec0f76ae1730bbef14cac31dd00ab41baa2fb23262c4b1253c1b7bb787a746f439b48e51ec5ffce04f11cf69e467a27caef348bebc38d449"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MerchantApiModule-ca4701add9a2ebacec0f76ae1730bbef14cac31dd00ab41baa2fb23262c4b1253c1b7bb787a746f439b48e51ec5ffce04f11cf69e467a27caef348bebc38d449"' :
                                            'id="xs-controllers-links-module-MerchantApiModule-ca4701add9a2ebacec0f76ae1730bbef14cac31dd00ab41baa2fb23262c4b1253c1b7bb787a746f439b48e51ec5ffce04f11cf69e467a27caef348bebc38d449"' }>
                                            <li class="link">
                                                <a href="controllers/MerchantApiController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MerchantApiController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MerchantApiModule-ca4701add9a2ebacec0f76ae1730bbef14cac31dd00ab41baa2fb23262c4b1253c1b7bb787a746f439b48e51ec5ffce04f11cf69e467a27caef348bebc38d449"' : 'data-target="#xs-injectables-links-module-MerchantApiModule-ca4701add9a2ebacec0f76ae1730bbef14cac31dd00ab41baa2fb23262c4b1253c1b7bb787a746f439b48e51ec5ffce04f11cf69e467a27caef348bebc38d449"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MerchantApiModule-ca4701add9a2ebacec0f76ae1730bbef14cac31dd00ab41baa2fb23262c4b1253c1b7bb787a746f439b48e51ec5ffce04f11cf69e467a27caef348bebc38d449"' :
                                        'id="xs-injectables-links-module-MerchantApiModule-ca4701add9a2ebacec0f76ae1730bbef14cac31dd00ab41baa2fb23262c4b1253c1b7bb787a746f439b48e51ec5ffce04f11cf69e467a27caef348bebc38d449"' }>
                                        <li class="link">
                                            <a href="injectables/MerchantApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MerchantApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MonnifyModule.html" data-type="entity-link" >MonnifyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MonnifyModule-0bbe6c5aef51f92dec8832c62084cd526f608fb6d81dbabee775d897bce05c0c4b391739c19d11151bab5c6d92be4c9d3380e51083791325de9d40194f086e6b"' : 'data-target="#xs-controllers-links-module-MonnifyModule-0bbe6c5aef51f92dec8832c62084cd526f608fb6d81dbabee775d897bce05c0c4b391739c19d11151bab5c6d92be4c9d3380e51083791325de9d40194f086e6b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MonnifyModule-0bbe6c5aef51f92dec8832c62084cd526f608fb6d81dbabee775d897bce05c0c4b391739c19d11151bab5c6d92be4c9d3380e51083791325de9d40194f086e6b"' :
                                            'id="xs-controllers-links-module-MonnifyModule-0bbe6c5aef51f92dec8832c62084cd526f608fb6d81dbabee775d897bce05c0c4b391739c19d11151bab5c6d92be4c9d3380e51083791325de9d40194f086e6b"' }>
                                            <li class="link">
                                                <a href="controllers/MonnifyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonnifyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MonnifyModule-0bbe6c5aef51f92dec8832c62084cd526f608fb6d81dbabee775d897bce05c0c4b391739c19d11151bab5c6d92be4c9d3380e51083791325de9d40194f086e6b"' : 'data-target="#xs-injectables-links-module-MonnifyModule-0bbe6c5aef51f92dec8832c62084cd526f608fb6d81dbabee775d897bce05c0c4b391739c19d11151bab5c6d92be4c9d3380e51083791325de9d40194f086e6b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MonnifyModule-0bbe6c5aef51f92dec8832c62084cd526f608fb6d81dbabee775d897bce05c0c4b391739c19d11151bab5c6d92be4c9d3380e51083791325de9d40194f086e6b"' :
                                        'id="xs-injectables-links-module-MonnifyModule-0bbe6c5aef51f92dec8832c62084cd526f608fb6d81dbabee775d897bce05c0c4b391739c19d11151bab5c6d92be4c9d3380e51083791325de9d40194f086e6b"' }>
                                        <li class="link">
                                            <a href="injectables/MonnifyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MonnifyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NodemailerModule.html" data-type="entity-link" >NodemailerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NodemailerModule-a98b333c4c33359d19f7c50d1bdccb48305cb858b86b6dcb2e6321169cc2a7d73b7ba44374597c46da4c13bc2b7a9f200705b03888663ea9a849d28589fd7b44"' : 'data-target="#xs-injectables-links-module-NodemailerModule-a98b333c4c33359d19f7c50d1bdccb48305cb858b86b6dcb2e6321169cc2a7d73b7ba44374597c46da4c13bc2b7a9f200705b03888663ea9a849d28589fd7b44"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NodemailerModule-a98b333c4c33359d19f7c50d1bdccb48305cb858b86b6dcb2e6321169cc2a7d73b7ba44374597c46da4c13bc2b7a9f200705b03888663ea9a849d28589fd7b44"' :
                                        'id="xs-injectables-links-module-NodemailerModule-a98b333c4c33359d19f7c50d1bdccb48305cb858b86b6dcb2e6321169cc2a7d73b7ba44374597c46da4c13bc2b7a9f200705b03888663ea9a849d28589fd7b44"' }>
                                        <li class="link">
                                            <a href="injectables/NodemailerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NodemailerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaystackModule.html" data-type="entity-link" >PaystackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PaystackModule-7a8893d9d4dced976c9395ff8fa23d7e58f0b2ba8ef50d5aae28b3eb10a53b5b484697acc563fceb7cf25913153201d3c1b8b7edf1482e430c2fcf1c072642d3"' : 'data-target="#xs-controllers-links-module-PaystackModule-7a8893d9d4dced976c9395ff8fa23d7e58f0b2ba8ef50d5aae28b3eb10a53b5b484697acc563fceb7cf25913153201d3c1b8b7edf1482e430c2fcf1c072642d3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaystackModule-7a8893d9d4dced976c9395ff8fa23d7e58f0b2ba8ef50d5aae28b3eb10a53b5b484697acc563fceb7cf25913153201d3c1b8b7edf1482e430c2fcf1c072642d3"' :
                                            'id="xs-controllers-links-module-PaystackModule-7a8893d9d4dced976c9395ff8fa23d7e58f0b2ba8ef50d5aae28b3eb10a53b5b484697acc563fceb7cf25913153201d3c1b8b7edf1482e430c2fcf1c072642d3"' }>
                                            <li class="link">
                                                <a href="controllers/PaystackController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaystackController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PaystackModule-7a8893d9d4dced976c9395ff8fa23d7e58f0b2ba8ef50d5aae28b3eb10a53b5b484697acc563fceb7cf25913153201d3c1b8b7edf1482e430c2fcf1c072642d3"' : 'data-target="#xs-injectables-links-module-PaystackModule-7a8893d9d4dced976c9395ff8fa23d7e58f0b2ba8ef50d5aae28b3eb10a53b5b484697acc563fceb7cf25913153201d3c1b8b7edf1482e430c2fcf1c072642d3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaystackModule-7a8893d9d4dced976c9395ff8fa23d7e58f0b2ba8ef50d5aae28b3eb10a53b5b484697acc563fceb7cf25913153201d3c1b8b7edf1482e430c2fcf1c072642d3"' :
                                        'id="xs-injectables-links-module-PaystackModule-7a8893d9d4dced976c9395ff8fa23d7e58f0b2ba8ef50d5aae28b3eb10a53b5b484697acc563fceb7cf25913153201d3c1b8b7edf1482e430c2fcf1c072642d3"' }>
                                        <li class="link">
                                            <a href="injectables/PaystackService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaystackService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReferralModule.html" data-type="entity-link" >ReferralModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ReferralModule-84b7c9e351ac419b43ece6b68b0d9697bb936a7b16331ac54ac39b410306cbf7b08536bed7ec38a518d0343e6b073ba9481b1edef0487e1ec6c1e5ae77877cd4"' : 'data-target="#xs-controllers-links-module-ReferralModule-84b7c9e351ac419b43ece6b68b0d9697bb936a7b16331ac54ac39b410306cbf7b08536bed7ec38a518d0343e6b073ba9481b1edef0487e1ec6c1e5ae77877cd4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReferralModule-84b7c9e351ac419b43ece6b68b0d9697bb936a7b16331ac54ac39b410306cbf7b08536bed7ec38a518d0343e6b073ba9481b1edef0487e1ec6c1e5ae77877cd4"' :
                                            'id="xs-controllers-links-module-ReferralModule-84b7c9e351ac419b43ece6b68b0d9697bb936a7b16331ac54ac39b410306cbf7b08536bed7ec38a518d0343e6b073ba9481b1edef0487e1ec6c1e5ae77877cd4"' }>
                                            <li class="link">
                                                <a href="controllers/ReferralController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ReferralModule-84b7c9e351ac419b43ece6b68b0d9697bb936a7b16331ac54ac39b410306cbf7b08536bed7ec38a518d0343e6b073ba9481b1edef0487e1ec6c1e5ae77877cd4"' : 'data-target="#xs-injectables-links-module-ReferralModule-84b7c9e351ac419b43ece6b68b0d9697bb936a7b16331ac54ac39b410306cbf7b08536bed7ec38a518d0343e6b073ba9481b1edef0487e1ec6c1e5ae77877cd4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReferralModule-84b7c9e351ac419b43ece6b68b0d9697bb936a7b16331ac54ac39b410306cbf7b08536bed7ec38a518d0343e6b073ba9481b1edef0487e1ec6c1e5ae77877cd4"' :
                                        'id="xs-injectables-links-module-ReferralModule-84b7c9e351ac419b43ece6b68b0d9697bb936a7b16331ac54ac39b410306cbf7b08536bed7ec38a518d0343e6b073ba9481b1edef0487e1ec6c1e5ae77877cd4"' }>
                                        <li class="link">
                                            <a href="injectables/ReferralService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeedingModule.html" data-type="entity-link" >SeedingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SettingsModule-439af2f5952068dc68a6d7cd1b6fde4ea42719cac2649b5e3440c4dd0da889310bb6c631ceea1684ef2894786feeb184087318ff577f7e79617230a2a5af441c"' : 'data-target="#xs-controllers-links-module-SettingsModule-439af2f5952068dc68a6d7cd1b6fde4ea42719cac2649b5e3440c4dd0da889310bb6c631ceea1684ef2894786feeb184087318ff577f7e79617230a2a5af441c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SettingsModule-439af2f5952068dc68a6d7cd1b6fde4ea42719cac2649b5e3440c4dd0da889310bb6c631ceea1684ef2894786feeb184087318ff577f7e79617230a2a5af441c"' :
                                            'id="xs-controllers-links-module-SettingsModule-439af2f5952068dc68a6d7cd1b6fde4ea42719cac2649b5e3440c4dd0da889310bb6c631ceea1684ef2894786feeb184087318ff577f7e79617230a2a5af441c"' }>
                                            <li class="link">
                                                <a href="controllers/SettingsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SettingsModule-439af2f5952068dc68a6d7cd1b6fde4ea42719cac2649b5e3440c4dd0da889310bb6c631ceea1684ef2894786feeb184087318ff577f7e79617230a2a5af441c"' : 'data-target="#xs-injectables-links-module-SettingsModule-439af2f5952068dc68a6d7cd1b6fde4ea42719cac2649b5e3440c4dd0da889310bb6c631ceea1684ef2894786feeb184087318ff577f7e79617230a2a5af441c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SettingsModule-439af2f5952068dc68a6d7cd1b6fde4ea42719cac2649b5e3440c4dd0da889310bb6c631ceea1684ef2894786feeb184087318ff577f7e79617230a2a5af441c"' :
                                        'id="xs-injectables-links-module-SettingsModule-439af2f5952068dc68a6d7cd1b6fde4ea42719cac2649b5e3440c4dd0da889310bb6c631ceea1684ef2894786feeb184087318ff577f7e79617230a2a5af441c"' }>
                                        <li class="link">
                                            <a href="injectables/SettingsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SmsModule.html" data-type="entity-link" >SmsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SmsModule-5f61b2bcfd4d88e948ad4926a09de56fd365ce5f1406403b44856bd2d7ad22b9b3405c774c4bd48e4a9e7f8ca4a009d8026a206b10cb20204983bbb1ea41d923"' : 'data-target="#xs-controllers-links-module-SmsModule-5f61b2bcfd4d88e948ad4926a09de56fd365ce5f1406403b44856bd2d7ad22b9b3405c774c4bd48e4a9e7f8ca4a009d8026a206b10cb20204983bbb1ea41d923"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SmsModule-5f61b2bcfd4d88e948ad4926a09de56fd365ce5f1406403b44856bd2d7ad22b9b3405c774c4bd48e4a9e7f8ca4a009d8026a206b10cb20204983bbb1ea41d923"' :
                                            'id="xs-controllers-links-module-SmsModule-5f61b2bcfd4d88e948ad4926a09de56fd365ce5f1406403b44856bd2d7ad22b9b3405c774c4bd48e4a9e7f8ca4a009d8026a206b10cb20204983bbb1ea41d923"' }>
                                            <li class="link">
                                                <a href="controllers/SmsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SmsModule-5f61b2bcfd4d88e948ad4926a09de56fd365ce5f1406403b44856bd2d7ad22b9b3405c774c4bd48e4a9e7f8ca4a009d8026a206b10cb20204983bbb1ea41d923"' : 'data-target="#xs-injectables-links-module-SmsModule-5f61b2bcfd4d88e948ad4926a09de56fd365ce5f1406403b44856bd2d7ad22b9b3405c774c4bd48e4a9e7f8ca4a009d8026a206b10cb20204983bbb1ea41d923"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SmsModule-5f61b2bcfd4d88e948ad4926a09de56fd365ce5f1406403b44856bd2d7ad22b9b3405c774c4bd48e4a9e7f8ca4a009d8026a206b10cb20204983bbb1ea41d923"' :
                                        'id="xs-injectables-links-module-SmsModule-5f61b2bcfd4d88e948ad4926a09de56fd365ce5f1406403b44856bd2d7ad22b9b3405c774c4bd48e4a9e7f8ca4a009d8026a206b10cb20204983bbb1ea41d923"' }>
                                        <li class="link">
                                            <a href="injectables/SmsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionsModule.html" data-type="entity-link" >TransactionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TransactionsModule-08e18fab89e2377def28d142af8fe8c55c86fa39fd23cc1dc70ec2be1ba7f729d7fada9331c944109e8222a8476727161ba0248b1604b6ae2c187c11ff775c26"' : 'data-target="#xs-controllers-links-module-TransactionsModule-08e18fab89e2377def28d142af8fe8c55c86fa39fd23cc1dc70ec2be1ba7f729d7fada9331c944109e8222a8476727161ba0248b1604b6ae2c187c11ff775c26"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TransactionsModule-08e18fab89e2377def28d142af8fe8c55c86fa39fd23cc1dc70ec2be1ba7f729d7fada9331c944109e8222a8476727161ba0248b1604b6ae2c187c11ff775c26"' :
                                            'id="xs-controllers-links-module-TransactionsModule-08e18fab89e2377def28d142af8fe8c55c86fa39fd23cc1dc70ec2be1ba7f729d7fada9331c944109e8222a8476727161ba0248b1604b6ae2c187c11ff775c26"' }>
                                            <li class="link">
                                                <a href="controllers/TransactionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TransactionsModule-08e18fab89e2377def28d142af8fe8c55c86fa39fd23cc1dc70ec2be1ba7f729d7fada9331c944109e8222a8476727161ba0248b1604b6ae2c187c11ff775c26"' : 'data-target="#xs-injectables-links-module-TransactionsModule-08e18fab89e2377def28d142af8fe8c55c86fa39fd23cc1dc70ec2be1ba7f729d7fada9331c944109e8222a8476727161ba0248b1604b6ae2c187c11ff775c26"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TransactionsModule-08e18fab89e2377def28d142af8fe8c55c86fa39fd23cc1dc70ec2be1ba7f729d7fada9331c944109e8222a8476727161ba0248b1604b6ae2c187c11ff775c26"' :
                                        'id="xs-injectables-links-module-TransactionsModule-08e18fab89e2377def28d142af8fe8c55c86fa39fd23cc1dc70ec2be1ba7f729d7fada9331c944109e8222a8476727161ba0248b1604b6ae2c187c11ff775c26"' }>
                                        <li class="link">
                                            <a href="injectables/TransactionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransactionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransfersModule.html" data-type="entity-link" >TransfersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TransfersModule-8f2a75a4550c0a022469781c6c0d93549704653a93564233930b22a4d18458a3edc24181df11d153a5cb02f0cac0074c37eddfabeb6871cfd457b0f31045b99e"' : 'data-target="#xs-controllers-links-module-TransfersModule-8f2a75a4550c0a022469781c6c0d93549704653a93564233930b22a4d18458a3edc24181df11d153a5cb02f0cac0074c37eddfabeb6871cfd457b0f31045b99e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TransfersModule-8f2a75a4550c0a022469781c6c0d93549704653a93564233930b22a4d18458a3edc24181df11d153a5cb02f0cac0074c37eddfabeb6871cfd457b0f31045b99e"' :
                                            'id="xs-controllers-links-module-TransfersModule-8f2a75a4550c0a022469781c6c0d93549704653a93564233930b22a4d18458a3edc24181df11d153a5cb02f0cac0074c37eddfabeb6871cfd457b0f31045b99e"' }>
                                            <li class="link">
                                                <a href="controllers/TransfersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransfersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TransfersModule-8f2a75a4550c0a022469781c6c0d93549704653a93564233930b22a4d18458a3edc24181df11d153a5cb02f0cac0074c37eddfabeb6871cfd457b0f31045b99e"' : 'data-target="#xs-injectables-links-module-TransfersModule-8f2a75a4550c0a022469781c6c0d93549704653a93564233930b22a4d18458a3edc24181df11d153a5cb02f0cac0074c37eddfabeb6871cfd457b0f31045b99e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TransfersModule-8f2a75a4550c0a022469781c6c0d93549704653a93564233930b22a4d18458a3edc24181df11d153a5cb02f0cac0074c37eddfabeb6871cfd457b0f31045b99e"' :
                                        'id="xs-injectables-links-module-TransfersModule-8f2a75a4550c0a022469781c6c0d93549704653a93564233930b22a4d18458a3edc24181df11d153a5cb02f0cac0074c37eddfabeb6871cfd457b0f31045b99e"' }>
                                        <li class="link">
                                            <a href="injectables/TransfersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransfersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TwillioModule.html" data-type="entity-link" >TwillioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TwillioModule-65cd57147a1a4933d2904d74c0333f39765987c4d079c3d6159499d7e4e42d2a0d423a411adce3e551ae88a8a70abec94c0fc18333778394e9f5279cf77f5b3b"' : 'data-target="#xs-controllers-links-module-TwillioModule-65cd57147a1a4933d2904d74c0333f39765987c4d079c3d6159499d7e4e42d2a0d423a411adce3e551ae88a8a70abec94c0fc18333778394e9f5279cf77f5b3b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TwillioModule-65cd57147a1a4933d2904d74c0333f39765987c4d079c3d6159499d7e4e42d2a0d423a411adce3e551ae88a8a70abec94c0fc18333778394e9f5279cf77f5b3b"' :
                                            'id="xs-controllers-links-module-TwillioModule-65cd57147a1a4933d2904d74c0333f39765987c4d079c3d6159499d7e4e42d2a0d423a411adce3e551ae88a8a70abec94c0fc18333778394e9f5279cf77f5b3b"' }>
                                            <li class="link">
                                                <a href="controllers/TwillioController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwillioController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TwillioModule-65cd57147a1a4933d2904d74c0333f39765987c4d079c3d6159499d7e4e42d2a0d423a411adce3e551ae88a8a70abec94c0fc18333778394e9f5279cf77f5b3b"' : 'data-target="#xs-injectables-links-module-TwillioModule-65cd57147a1a4933d2904d74c0333f39765987c4d079c3d6159499d7e4e42d2a0d423a411adce3e551ae88a8a70abec94c0fc18333778394e9f5279cf77f5b3b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TwillioModule-65cd57147a1a4933d2904d74c0333f39765987c4d079c3d6159499d7e4e42d2a0d423a411adce3e551ae88a8a70abec94c0fc18333778394e9f5279cf77f5b3b"' :
                                        'id="xs-injectables-links-module-TwillioModule-65cd57147a1a4933d2904d74c0333f39765987c4d079c3d6159499d7e4e42d2a0d423a411adce3e551ae88a8a70abec94c0fc18333778394e9f5279cf77f5b3b"' }>
                                        <li class="link">
                                            <a href="injectables/TwillioService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwillioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-e371f1e528e1a1f4ec943c6da080ce52bcf7e29f300f064fee02a4c8ddf5443a868055ab6444925ca2dff2e9d48ed13f60a350b37abee96e13616815ac0749d8"' : 'data-target="#xs-controllers-links-module-UserModule-e371f1e528e1a1f4ec943c6da080ce52bcf7e29f300f064fee02a4c8ddf5443a868055ab6444925ca2dff2e9d48ed13f60a350b37abee96e13616815ac0749d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-e371f1e528e1a1f4ec943c6da080ce52bcf7e29f300f064fee02a4c8ddf5443a868055ab6444925ca2dff2e9d48ed13f60a350b37abee96e13616815ac0749d8"' :
                                            'id="xs-controllers-links-module-UserModule-e371f1e528e1a1f4ec943c6da080ce52bcf7e29f300f064fee02a4c8ddf5443a868055ab6444925ca2dff2e9d48ed13f60a350b37abee96e13616815ac0749d8"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-e371f1e528e1a1f4ec943c6da080ce52bcf7e29f300f064fee02a4c8ddf5443a868055ab6444925ca2dff2e9d48ed13f60a350b37abee96e13616815ac0749d8"' : 'data-target="#xs-injectables-links-module-UserModule-e371f1e528e1a1f4ec943c6da080ce52bcf7e29f300f064fee02a4c8ddf5443a868055ab6444925ca2dff2e9d48ed13f60a350b37abee96e13616815ac0749d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-e371f1e528e1a1f4ec943c6da080ce52bcf7e29f300f064fee02a4c8ddf5443a868055ab6444925ca2dff2e9d48ed13f60a350b37abee96e13616815ac0749d8"' :
                                        'id="xs-injectables-links-module-UserModule-e371f1e528e1a1f4ec943c6da080ce52bcf7e29f300f064fee02a4c8ddf5443a868055ab6444925ca2dff2e9d48ed13f60a350b37abee96e13616815ac0749d8"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VtpassModule.html" data-type="entity-link" >VtpassModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VtpassModule-e97a9efaca334075a3716f5d247a2c94007c8fe7d03c9153be826fb252e28b3862e75b4819cbfea1ad10e6988810130d3ded3ea115273f8bd17eaea9fdda5dd1"' : 'data-target="#xs-controllers-links-module-VtpassModule-e97a9efaca334075a3716f5d247a2c94007c8fe7d03c9153be826fb252e28b3862e75b4819cbfea1ad10e6988810130d3ded3ea115273f8bd17eaea9fdda5dd1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VtpassModule-e97a9efaca334075a3716f5d247a2c94007c8fe7d03c9153be826fb252e28b3862e75b4819cbfea1ad10e6988810130d3ded3ea115273f8bd17eaea9fdda5dd1"' :
                                            'id="xs-controllers-links-module-VtpassModule-e97a9efaca334075a3716f5d247a2c94007c8fe7d03c9153be826fb252e28b3862e75b4819cbfea1ad10e6988810130d3ded3ea115273f8bd17eaea9fdda5dd1"' }>
                                            <li class="link">
                                                <a href="controllers/VtpassController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VtpassController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VtpassModule-e97a9efaca334075a3716f5d247a2c94007c8fe7d03c9153be826fb252e28b3862e75b4819cbfea1ad10e6988810130d3ded3ea115273f8bd17eaea9fdda5dd1"' : 'data-target="#xs-injectables-links-module-VtpassModule-e97a9efaca334075a3716f5d247a2c94007c8fe7d03c9153be826fb252e28b3862e75b4819cbfea1ad10e6988810130d3ded3ea115273f8bd17eaea9fdda5dd1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VtpassModule-e97a9efaca334075a3716f5d247a2c94007c8fe7d03c9153be826fb252e28b3862e75b4819cbfea1ad10e6988810130d3ded3ea115273f8bd17eaea9fdda5dd1"' :
                                        'id="xs-injectables-links-module-VtpassModule-e97a9efaca334075a3716f5d247a2c94007c8fe7d03c9153be826fb252e28b3862e75b4819cbfea1ad10e6988810130d3ded3ea115273f8bd17eaea9fdda5dd1"' }>
                                        <li class="link">
                                            <a href="injectables/VtpassService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VtpassService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WalletModule.html" data-type="entity-link" >WalletModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-WalletModule-decb78ca32f81976482bae69e11769e04cf1acdf65f1d4ff7a0244cb873821e445896c038e0af6eaea836b12bf2bc79a2f024484e2a56abea6d738cca4a4e7f5"' : 'data-target="#xs-controllers-links-module-WalletModule-decb78ca32f81976482bae69e11769e04cf1acdf65f1d4ff7a0244cb873821e445896c038e0af6eaea836b12bf2bc79a2f024484e2a56abea6d738cca4a4e7f5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WalletModule-decb78ca32f81976482bae69e11769e04cf1acdf65f1d4ff7a0244cb873821e445896c038e0af6eaea836b12bf2bc79a2f024484e2a56abea6d738cca4a4e7f5"' :
                                            'id="xs-controllers-links-module-WalletModule-decb78ca32f81976482bae69e11769e04cf1acdf65f1d4ff7a0244cb873821e445896c038e0af6eaea836b12bf2bc79a2f024484e2a56abea6d738cca4a4e7f5"' }>
                                            <li class="link">
                                                <a href="controllers/WalletController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WalletModule-decb78ca32f81976482bae69e11769e04cf1acdf65f1d4ff7a0244cb873821e445896c038e0af6eaea836b12bf2bc79a2f024484e2a56abea6d738cca4a4e7f5"' : 'data-target="#xs-injectables-links-module-WalletModule-decb78ca32f81976482bae69e11769e04cf1acdf65f1d4ff7a0244cb873821e445896c038e0af6eaea836b12bf2bc79a2f024484e2a56abea6d738cca4a4e7f5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WalletModule-decb78ca32f81976482bae69e11769e04cf1acdf65f1d4ff7a0244cb873821e445896c038e0af6eaea836b12bf2bc79a2f024484e2a56abea6d738cca4a4e7f5"' :
                                        'id="xs-injectables-links-module-WalletModule-decb78ca32f81976482bae69e11769e04cf1acdf65f1d4ff7a0244cb873821e445896c038e0af6eaea836b12bf2bc79a2f024484e2a56abea6d738cca4a4e7f5"' }>
                                        <li class="link">
                                            <a href="injectables/WalletService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Account.html" data-type="entity-link" >Account</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Admin.html" data-type="entity-link" >Admin</a>
                                </li>
                                <li class="link">
                                    <a href="entities/AirtimeActivity.html" data-type="entity-link" >AirtimeActivity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Announcement.html" data-type="entity-link" >Announcement</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Customer.html" data-type="entity-link" >Customer</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CustomerKyc.html" data-type="entity-link" >CustomerKyc</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Deposit.html" data-type="entity-link" >Deposit</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ElectricityBillActivity.html" data-type="entity-link" >ElectricityBillActivity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Email.html" data-type="entity-link" >Email</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Log.html" data-type="entity-link" >Log</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Merchant.html" data-type="entity-link" >Merchant</a>
                                </li>
                                <li class="link">
                                    <a href="entities/MobileDataActivity.html" data-type="entity-link" >MobileDataActivity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PaymentMerchant.html" data-type="entity-link" >PaymentMerchant</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ReceiveTransfer.html" data-type="entity-link" >ReceiveTransfer</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Referral.html" data-type="entity-link" >Referral</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SeedingLogEntry.html" data-type="entity-link" >SeedingLogEntry</a>
                                </li>
                                <li class="link">
                                    <a href="entities/SendTransfer.html" data-type="entity-link" >SendTransfer</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Setting.html" data-type="entity-link" >Setting</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TransferRequest.html" data-type="entity-link" >TransferRequest</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TvSubscriptionActivity.html" data-type="entity-link" >TvSubscriptionActivity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Wallet.html" data-type="entity-link" >Wallet</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Withdrawal.html" data-type="entity-link" >Withdrawal</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountRepository.html" data-type="entity-link" >AccountRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Activity.html" data-type="entity-link" >Activity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Activity-1.html" data-type="entity-link" >Activity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddBankAccountDTO.html" data-type="entity-link" >AddBankAccountDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminRepository.html" data-type="entity-link" >AdminRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/AirtimeActivityRepository.html" data-type="entity-link" >AirtimeActivityRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnnouncementQueryDto.html" data-type="entity-link" >AnnouncementQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AnnouncementReository.html" data-type="entity-link" >AnnouncementReository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthorizeDepositData.html" data-type="entity-link" >AuthorizeDepositData</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthorizeDepositDto.html" data-type="entity-link" >AuthorizeDepositDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bank.html" data-type="entity-link" >Bank</a>
                            </li>
                            <li class="link">
                                <a href="classes/BouquetChangeDto.html" data-type="entity-link" >BouquetChangeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BouquetRenewalDto.html" data-type="entity-link" >BouquetRenewalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyAirtimeDto.html" data-type="entity-link" >BuyAirtimeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyAirtimeDto-1.html" data-type="entity-link" >BuyAirtimeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyAirtimeDto-2.html" data-type="entity-link" >BuyAirtimeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyDataDto.html" data-type="entity-link" >BuyDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyDataDto-1.html" data-type="entity-link" >BuyDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyDataDto-2.html" data-type="entity-link" >BuyDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyDSTVGOTV.html" data-type="entity-link" >BuyDSTVGOTV</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyDSTVGOTV-1.html" data-type="entity-link" >BuyDSTVGOTV</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyElectricityDto.html" data-type="entity-link" >BuyElectricityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyElectricityDto-1.html" data-type="entity-link" >BuyElectricityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyElectricityDto-2.html" data-type="entity-link" >BuyElectricityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyShowmaxDto.html" data-type="entity-link" >BuyShowmaxDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyShowmaxStartimesDto.html" data-type="entity-link" >BuyShowmaxStartimesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyShowmaxStartimesDto-1.html" data-type="entity-link" >BuyShowmaxStartimesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyStartimesDto.html" data-type="entity-link" >BuyStartimesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BuyWAECDto.html" data-type="entity-link" >BuyWAECDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfirmPhoneNumberDto.html" data-type="entity-link" >ConfirmPhoneNumberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccountDto.html" data-type="entity-link" >CreateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateActivityDto.html" data-type="entity-link" >CreateActivityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAirtimeDto.html" data-type="entity-link" >CreateAirtimeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAnnouncementDto.html" data-type="entity-link" >CreateAnnouncementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBillDto.html" data-type="entity-link" >CreateBillDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateElectricitybillDto.html" data-type="entity-link" >CreateElectricitybillDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEmailDto.html" data-type="entity-link" >CreateEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHealthDto.html" data-type="entity-link" >CreateHealthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLogDto.html" data-type="entity-link" >CreateLogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMerchantApiDto.html" data-type="entity-link" >CreateMerchantApiDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMobiledatumDto.html" data-type="entity-link" >CreateMobiledatumDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMonnifyDto.html" data-type="entity-link" >CreateMonnifyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNodemailerDto.html" data-type="entity-link" >CreateNodemailerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePaystackDto.html" data-type="entity-link" >CreatePaystackDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReceiveTransferPermission.html" data-type="entity-link" >CreateReceiveTransferPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReferralDto.html" data-type="entity-link" >CreateReferralDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReservedAccountDto.html" data-type="entity-link" >CreateReservedAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReservedAccountDto-1.html" data-type="entity-link" >CreateReservedAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSendTransferPermission.html" data-type="entity-link" >CreateSendTransferPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSettingDto.html" data-type="entity-link" >CreateSettingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransactionDto.html" data-type="entity-link" >CreateTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransferDto.html" data-type="entity-link" >CreateTransferDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransferRecipientDto.html" data-type="entity-link" >CreateTransferRecipientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTransferRequestPermission.html" data-type="entity-link" >CreateTransferRequestPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTvsubscriptionDto.html" data-type="entity-link" >CreateTvsubscriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTwillioDto.html" data-type="entity-link" >CreateTwillioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserPermission.html" data-type="entity-link" >CreateUserPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateVirtualAccountDto.html" data-type="entity-link" >CreateVirtualAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateVtpassDto.html" data-type="entity-link" >CreateVtpassDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWalletDto.html" data-type="entity-link" >CreateWalletDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWithdrawalPermission.html" data-type="entity-link" >CreateWithdrawalPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomerKycRepository.html" data-type="entity-link" >CustomerKycRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomerRepository.html" data-type="entity-link" >CustomerRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseLogger.html" data-type="entity-link" >DatabaseLogger</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteReceiveTransferPermission.html" data-type="entity-link" >DeleteReceiveTransferPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteSendTransferPermission.html" data-type="entity-link" >DeleteSendTransferPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteTransferRequestPermission.html" data-type="entity-link" >DeleteTransferRequestPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteUserPermission.html" data-type="entity-link" >DeleteUserPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteWithdrawalPermission.html" data-type="entity-link" >DeleteWithdrawalPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/DepositRepository.html" data-type="entity-link" >DepositRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditReceiveTransferPermission.html" data-type="entity-link" >EditReceiveTransferPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditSendTransferPermission.html" data-type="entity-link" >EditSendTransferPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditTransferRequestPermission.html" data-type="entity-link" >EditTransferRequestPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditUserPermission.html" data-type="entity-link" >EditUserPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditWithdrawalPermission.html" data-type="entity-link" >EditWithdrawalPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/ElectricityBillActivityRepository.html" data-type="entity-link" >ElectricityBillActivityRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntityContainer.html" data-type="entity-link" >EntityContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/FinalizeWithdrawalDto.html" data-type="entity-link" >FinalizeWithdrawalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Flutterwave.html" data-type="entity-link" >Flutterwave</a>
                            </li>
                            <li class="link">
                                <a href="classes/FWWithdrawalDto.html" data-type="entity-link" >FWWithdrawalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Health.html" data-type="entity-link" >Health</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitializeWithdrawalDto.html" data-type="entity-link" >InitializeWithdrawalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitiateDepositDto.html" data-type="entity-link" >InitiateDepositDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitiateMNTransferDto.html" data-type="entity-link" >InitiateMNTransferDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitiateWithdrawalData.html" data-type="entity-link" >InitiateWithdrawalData</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitiateWithdrawalDto.html" data-type="entity-link" >InitiateWithdrawalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MobileDataActivityRepository.html" data-type="entity-link" >MobileDataActivityRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Monnify.html" data-type="entity-link" >Monnify</a>
                            </li>
                            <li class="link">
                                <a href="classes/Nodemailer.html" data-type="entity-link" >Nodemailer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Paystack.html" data-type="entity-link" >Paystack</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryTransactionStatusDto.html" data-type="entity-link" >QueryTransactionStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadReceiveTransferPermission.html" data-type="entity-link" >ReadReceiveTransferPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadSendTransferPermission.html" data-type="entity-link" >ReadSendTransferPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadTransferRequestPermission.html" data-type="entity-link" >ReadTransferRequestPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadUserPermission.html" data-type="entity-link" >ReadUserPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadWithdrawalPermission.html" data-type="entity-link" >ReadWithdrawalPermission</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReceiveTransferRepository.html" data-type="entity-link" >ReceiveTransferRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReferralRepository.html" data-type="entity-link" >ReferralRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendTransferRepository.html" data-type="entity-link" >SendTransferRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetPinDTO.html" data-type="entity-link" >SetPinDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sm.html" data-type="entity-link" >Sm</a>
                            </li>
                            <li class="link">
                                <a href="classes/Transaction.html" data-type="entity-link" >Transaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionDto.html" data-type="entity-link" >TransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionQueryDto.html" data-type="entity-link" >TransactionQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Transfer.html" data-type="entity-link" >Transfer</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransferRequestRepository.html" data-type="entity-link" >TransferRequestRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/TvSubscriptionActivityRepository.html" data-type="entity-link" >TvSubscriptionActivityRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Twillio.html" data-type="entity-link" >Twillio</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAccountDto.html" data-type="entity-link" >UpdateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateActivityDto.html" data-type="entity-link" >UpdateActivityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAirtimeDto.html" data-type="entity-link" >UpdateAirtimeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAnnouncementDto.html" data-type="entity-link" >UpdateAnnouncementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateElectricitybillDto.html" data-type="entity-link" >UpdateElectricitybillDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEmailDto.html" data-type="entity-link" >UpdateEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHealthDto.html" data-type="entity-link" >UpdateHealthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLogDto.html" data-type="entity-link" >UpdateLogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMerchantApiDto.html" data-type="entity-link" >UpdateMerchantApiDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMobiledatumDto.html" data-type="entity-link" >UpdateMobiledatumDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMonnifyDto.html" data-type="entity-link" >UpdateMonnifyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNodemailerDto.html" data-type="entity-link" >UpdateNodemailerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePaystackDto.html" data-type="entity-link" >UpdatePaystackDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReferralDto.html" data-type="entity-link" >UpdateReferralDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSettingDto.html" data-type="entity-link" >UpdateSettingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTransactionDto.html" data-type="entity-link" >UpdateTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTransferDto.html" data-type="entity-link" >UpdateTransferDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTvsubscriptionDto.html" data-type="entity-link" >UpdateTvsubscriptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTwillioDto.html" data-type="entity-link" >UpdateTwillioDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateVtpassDto.html" data-type="entity-link" >UpdateVtpassDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWalletDto.html" data-type="entity-link" >UpdateWalletDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UssdDepositData.html" data-type="entity-link" >UssdDepositData</a>
                            </li>
                            <li class="link">
                                <a href="classes/UssdDepositDto.html" data-type="entity-link" >UssdDepositDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateAccountDto.html" data-type="entity-link" >ValidateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateAirtimeDto.html" data-type="entity-link" >ValidateAirtimeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateDepositDto.html" data-type="entity-link" >ValidateDepositDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyAccountNumberDto.html" data-type="entity-link" >VerifyAccountNumberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyAccountNumberDto-1.html" data-type="entity-link" >VerifyAccountNumberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyBvnDto.html" data-type="entity-link" >VerifyBvnDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyEmailDTO.html" data-type="entity-link" >VerifyEmailDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifySmartCardDto.html" data-type="entity-link" >VerifySmartCardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifySmileEmailDto.html" data-type="entity-link" >VerifySmileEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifySmilePhoneDto.html" data-type="entity-link" >VerifySmilePhoneDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyTransactionDto.html" data-type="entity-link" >VerifyTransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Vtpass.html" data-type="entity-link" >Vtpass</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletRepository.html" data-type="entity-link" >WalletRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/WithdrawalRepository.html" data-type="entity-link" >WithdrawalRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CustomLogger.html" data-type="entity-link" >CustomLogger</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGaurd.html" data-type="entity-link" >JwtAuthGaurd</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGaurd.html" data-type="entity-link" >LocalAuthGaurd</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeedingMiddleware.html" data-type="entity-link" >SeedingMiddleware</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AbilitiesGuard.html" data-type="entity-link" >AbilitiesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ApiSuccessResponse.html" data-type="entity-link" >ApiSuccessResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequiredRule.html" data-type="entity-link" >RequiredRule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReturnTypeContainer.html" data-type="entity-link" >ReturnTypeContainer</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});