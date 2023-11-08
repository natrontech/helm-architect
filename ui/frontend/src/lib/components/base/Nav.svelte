<script lang="ts">
    import { page } from '$app/stores';
  import { client } from '$lib/pocketbase';
    import { signOut } from '@auth/sveltekit/client';
  import { Navbar, NavBrand, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
</script>

<Navbar class="bg-primary-700 dark:bg-primary-700">
  <NavBrand href="/app">
    <img src="/images/helm-architect-white-typo.png" class="mr-3 h-10 sm:h-16" alt="Flowbite Logo" />
  </NavBrand>
  <div class="flex items-center md:order-2 cursor-pointer active:scale-105">
    <Avatar id="avatar-menu" /> <!--src={avatarUrlString} -->
    <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block text-sm">{$page.data.session?.user?.name}</span>
      <span class="block truncate text-sm font-medium">{$page.data.session?.user?.email}</span>
    </DropdownHeader>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownDivider />
    <DropdownItem on:click={() => signOut()}>Sign out</DropdownItem>
  </Dropdown>
</Navbar>
