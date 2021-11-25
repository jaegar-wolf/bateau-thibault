import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'prod-prom',
    loadChildren: () => import('./prod-prom/prod-prom.module').then( m => m.ProdPromPageModule)
  },
  {
    path: 'single-restaurant',
    loadChildren: () => import('./single-restaurant/single-restaurant.module').then( m => m.SingleRestaurantPageModule)
  },
  {
    path: 'single-bateau',
    loadChildren: () => import('./single-bateau/single-bateau.module').then( m => m.SingleBateauPageModule)
  },
  {
    path: 'single-produit',
    loadChildren: () => import('./single-produit/single-produit.module').then( m => m.SingleProduitPageModule)
  },
  {
    path: 'single-recette',
    loadChildren: () => import('./single-recette/single-recette.module').then( m => m.SingleRecettePageModule)
  },
  {
    path: 'crustaces',
    loadChildren: () => import('./crustaces/crustaces.module').then( m => m.CrustacesPageModule)
  },
  {
    path: 'poissons',
    loadChildren: () => import('./poissons/poissons.module').then( m => m.PoissonsPageModule)
  },
  {
    path: 'coquillages',
    loadChildren: () => import('./coquillages/coquillages.module').then( m => m.CoquillagesPageModule)
  },
  {
    path: 'promotion',
    loadChildren: () => import('./promotion/promotion.module').then( m => m.PromotionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
