package com.team5.nbe341team05.domain.cart.entity;

import com.team5.nbe341team05.domain.cartMenu.entity.CartMenu;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Long id;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartMenu> cartMenus = new ArrayList<>();

    public void addCartMenu(CartMenu cartmenu) {
        cartMenus.add(cartmenu);
        cartmenu.setCart(this);
    }

    public void clear() {
        for (CartMenu cartMenu : cartMenus) {
            cartMenu.setCart(null);
        }
        this.cartMenus.clear();
    }
}
