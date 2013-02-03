<?php
namespace Application\Entity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity
 * @ORM\Table(name="tx_prompc_domain_model_product")
 */

class Product extends Model
{

    /**
     * @ORM\Column(type="string", name="name")
     */
    protected $title;

    /**
     * @ORM\ManyToOne(targetEntity="Category")
     * @ORM\JoinColumn(name="pid", referencedColumnName="uid")
     */
    protected $category;

    /**
     * @ORM\Column(type="integer", name="pid")
     */
    protected $categoryId;

    /**
     * @ORM\ManyToOne(targetEntity="Currency")
     * @ORM\JoinColumn(name="current_currency", referencedColumnName="uid")
     */
    protected $currentCurrency;

    /**
     * @ORM\Column(type="integer", name="current_currency")
     */
    protected $currentCurrencyId;

}
